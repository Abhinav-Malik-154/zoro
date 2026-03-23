// next.config.js
/** @type {import('next').NextConfig} */
const path = require('path');
const theme = require('tailwind-compile')

module.exports = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      }
    );

    config.module.rules.push({
      test: /\.spec\.tsx?$/,
      use: 'ignore-loader',
    });

    config.module.rules.push({
      test: /\.stories\.tsx?$/,
      use: 'ignore-loader',
    });

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;
    config.externals.push('pino-pretty', 'lokijs', 'encoding', 'eccrypto');

    return config;
  },
  async redirects() {
    if (process.env.NEXT_PUBLIC_FF_ISOLATED_POOLS === 'true') {
      return [
        {
          source: '/markets',
          destination: '/',
          permanent: false,
        },
        {
          source: '/markets/:poolComptrollerAddress/market/:vTokenAddress',
          destination: '/',
          permanent: false,
        },
      ];
    }

    return [
      {
        source: '/pools/pool/:poolComptrollerAddress/market/:vTokenAddress',
        destination: '/',
        permanent: false,
      },
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'assets', 'styles')],
  },
};