import '@/assets/styles/index.scss';
import initializeLibraries from '@/initializeLibraries';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Providers } from './providers';
import { Metadata } from 'next';
import type { Viewport } from 'next';
import * as buffer from 'buffer';

if (typeof window !== 'undefined') {
  window.Buffer = buffer.Buffer;
}

initializeLibraries();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  themeColor: '#3A78FF',
};

const metadata: Metadata = {
  applicationName: 'Zoro Protocol',
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zoro.finance',
    siteName: 'Zoro Protocol',
    title: 'Zoro Protocol',
    description:
      'Zoro is a decentralized finance (DeFi) algorithmic money market protocol on ZkSync Era.',
    images: [
      {
        url: 'https://zoro.finance/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zoro Protocol',
      },
    ],
  },
  twitter: {
    images: ['https://zoroprotocol.com/assets/images/logo/zoro-favicon.png'],
    site: '@zoroprotocol',
    card: 'summary_large_image',
    creator: '@zoroprotocol',
    title: 'Zoro Protocol',
    description:
      'Zoro is a decentralized finance (DeFi) algorithmic money market protocol on ZkSync Era.',
  },
  title: 'Zoro Protocol',
  description:
    'Zoro is a decentralized finance (DeFi) algorithmic money market protocol on ZkSync Era.',
  keywords:
    'zoro, zoro protocol, defi, borrow, lend, crypto, blockchain, bsc, bnb, bnb chain, decentralized finance, zkSync, zkSync Era',
  manifest: '/manifest.json',
  icons: [
    { url: '/icon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { url: '/icon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { url: '/icon/apple-touch-icon.png', type: 'image/png' },
    { url: '/icon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { url: '/icon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { url: '/icon/favicon-57x57.png', sizes: '57x57', type: 'image/png' },
    { url: '/icon/favicon-60x60.png', sizes: '60x60', type: 'image/png' },
    { url: '/icon/favicon-72x72.png', sizes: '72x72', type: 'image/png' },
    { url: '/icon/favicon-76x76.png', sizes: '76x76', type: 'image/png' },
    { url: '/icon/favicon-114x114.png', sizes: '114x114', type: 'image/png' },
    { url: '/icon/favicon-120x120.png', sizes: '120x120', type: 'image/png' },
    { url: '/icon/favicon-144x144.png', sizes: '144x144', type: 'image/png' },
    { url: '/icon/favicon-152x152.png', sizes: '152x152', type: 'image/png' },
    { url: '/icon/favicon-180x180.png', sizes: '180x180', type: 'image/png' },
  ],
};

export { metadata };
