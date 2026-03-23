'use client';

import Icon from '@/assets/img/Logo-01.svg?url';
// import { queryClient } from '@/clients/api';
import { Layout, ResetScrollOnRouteChange } from '@/components';
import { AuthProvider } from '@/context/AuthContext';
import { GeolocationProvider } from '@/context/GeolocationContext';
import { SuccessfulTransactionModalProvider } from '@/context/SuccessfulTransactionModalContext';
import { MuiThemeProvider } from '@/theme/MuiThemeProvider';
import coinbaseModule from '@web3-onboard/coinbase';
import injectedModule from '@web3-onboard/injected-wallets';
import ledgerModule from '@web3-onboard/ledger';
import { Web3OnboardProvider, init } from '@web3-onboard/react';
import trezorModule from '@web3-onboard/trezor';
import trustModule from '@web3-onboard/trust';
import walletConnectModule from '@web3-onboard/walletconnect';
import '@/assets/styles/App.scss';
import React, { PropsWithChildren } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { getQueryClient } from './get-query-client';

const injected = injectedModule();
const coinbase = coinbaseModule({ darkMode: true });
const walletConnect = walletConnectModule({
  projectId: '0f87fc2cf39e518bda94e227dc61150d',
  dappUrl: 'http://app.zoroprotocol.com/',
const ledger = ledgerModule({
  projectId: '0f87fc2cf39e518bda94e227dc61150d',
  walletConnectVersion: 2,
});
const trust = trustModule();
const trezorOptions = {
  email: 'test@test.com',
  appUrl: 'http://app.zoroprotocol.com/',
};
const trezor = trezorModule(trezorOptions);
const wallets = [injected, trust, coinbase, walletConnect, ledger, trezor];

const chains = [
  {
    id: '0x118',
    token: 'ETH',
    label: 'zkSync Era Testnet RPC',
    rpcUrl: `https://testnet.era.zksync.dev`,
  },
  {
    id: '0x144',
    token: 'ETH',
    label: 'zkSync Era Mainnet',
    rpcUrl: `https://mainnet.era.zksync.io `,
  },
];

const web3Onboard = init({
  wallets,
  chains,
  appMetadata: {
    name: 'ZORO',
    icon: Icon.src,
    description: 'Main App',
  },
  theme: 'dark',
});

export const Providers = ({ children }: PropsWithChildren) => {
  const queryClient = getQueryClient();

  return (
    <GeolocationProvider>
      <Web3OnboardProvider web3Onboard={web3Onboard}>
        <QueryClientProvider client={queryClient}>
          <MuiThemeProvider>
            <AuthProvider>
              <SuccessfulTransactionModalProvider>
                <ToastContainer />
                <Layout>
                  {/* <Switch /> */}
                  {children}
                </Layout>
              </SuccessfulTransactionModalProvider>
            </AuthProvider>
          </MuiThemeProvider>
        </QueryClientProvider>
      </Web3OnboardProvider>
    </GeolocationProvider>
  );
};
