export type FeatureFlag = 'isolatedPools' | 'integratedSwap';

const featureFlags = {
  isolatedPools: process.env.NEXT_PUBLIC_FF_ISOLATED_POOLS === 'true',
  integratedSwap: process.env.NEXT_PUBLIC_FF_INTEGRATED_SWAP === 'true',
};

const isFeatureEnabled = (featureFlag: FeatureFlag) =>
  featureFlags[featureFlag];

export default isFeatureEnabled;
