import sample from 'lodash/sample';
import { ZkChainId, Environment } from '@/types';

import { ZK_SCAN_URLS } from '@/constants/zk';
import { API_ENDPOINT_URLS, RPC_URLS } from '@/constants/endpoints';

//import { MAINNET_SUBGRAPH_URL, TESTNET_SUBGRAPH_URL } from './codegen';

export interface Config {
  environment: Environment;
  chainId: ZkChainId;
  isOnTestnet: boolean;
  rpcUrl: string;
  apiUrl: string;
  //subgraphUrl: string;
  zkScanUrl: string;
  //sentryDsn: string;
  //posthog: {
  //apiKey: string;
  //hostUrl: string;
  //};
}

// Note: because Vite statically replaces env variables when building, we need
// to reference each of them by their full name
// export const ENV_VARIABLES = {
//   NODE_ENV: typeof process !== 'undefined' ? process.env.NODE_ENV : undefined,
//   NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,

//   // Third-parties
//   //VITE_SENTRY_DSN:
//   //typeof process !== 'undefined' ? process.env.VITE_SENTRY_DSN : import.meta.env.VITE_SENTRY_DSN,
//   //VITE_POSTHOG_API_KEY:
//   //typeof process !== 'undefined'
//   //? process.env.VITE_POSTHOG_API_KEY
//   //: import.meta.env.VITE_POSTHOG_API_KEY,
//   //VITE_POSTHOG_HOST_URL:
//   //typeof process !== 'undefined'
//   //? process.env.VITE_POSTHOG_HOST_URL
//   //: import.meta.env.VITE_POSTHOG_HOST_URL,

//   //// Feature flags
//   //NEXT_PUBLIC_FF_ISOLATED_POOLS:
//   //typeof process !== 'undefined'
//   //? process.env.NEXT_PUBLIC_FF_ISOLATED_POOLS
//   //: import.meta.env.NEXT_PUBLIC_FF_ISOLATED_POOLS,
//   //NEXT_PUBLIC_FF_INTEGRATED_SWAP:
//   //typeof process !== 'undefined'
//   //? process.env.NEXT_PUBLIC_FF_INTEGRATED_SWAP
//   //: import.meta.env.NEXT_PUBLIC_FF_INTEGRATED_SWAP,
// };

const environment: Environment =
  (process.env.NEXT_PUBLIC_ENVIRONMENT as Environment | undefined) || 'mainnet';

const isOnTestnet =
  environment === 'testnet' ||
  environment === 'storybook' ||
  environment === 'ci';

const chainId: ZkChainId = isOnTestnet ? 280 : 324;

const rpcUrl = sample(RPC_URLS[chainId]) as string;
const apiUrl = API_ENDPOINT_URLS[environment];
const zkScanUrl = ZK_SCAN_URLS[chainId];
//const subgraphUrl = isOnTestnet ? TESTNET_SUBGRAPH_URL : MAINNET_SUBGRAPH_URL;

const config: Config = {
  environment,
  chainId,
  isOnTestnet,
  rpcUrl,
  apiUrl,
  //subgraphUrl,
  zkScanUrl,
  //sentryDsn: ENV_VARIABLES.VITE_SENTRY_DSN || '',
  //posthog: {
  //apiKey: ENV_VARIABLES.VITE_POSTHOG_API_KEY || '',
  //hostUrl: ENV_VARIABLES.VITE_POSTHOG_HOST_URL || '',
  //},
};

export default config;
