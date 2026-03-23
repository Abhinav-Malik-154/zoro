'use client';
import { useConnectWallet, useSetChain } from '@web3-onboard/react';
import { Connector } from '@/clients/web3';
import { AuthModal } from '@/components/AuthModal';
import { Signer, getDefaultProvider, ethers } from 'ethers';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';
import noop from 'noop-ts';
import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { useTranslation } from '@/translation';
import config from '@/config';
export interface AuthContextValue {
  login: (connector: Connector) => Promise<void>;
  logOut: () => void;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  provider: any;
  accountAddress: string;
  signer?: Signer;
}

export const AuthContext = React.createContext<AuthContextValue>({
  login: noop,
  logOut: noop,
  openAuthModal: noop,
  closeAuthModal: noop,
  provider: getDefaultProvider(),
  accountAddress: '',
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [{ connectedChain }, setChain] = useSetChain();

  const walletProvider = wallet?.provider;
  const provider = useMemo(() => {
    let provider = null;
    if (walletProvider) {
      provider = new ethers.providers.Web3Provider(wallet.provider);
    } else {
      provider = new ethers.providers.JsonRpcProvider(
        'https://eth.llamarpc.com'
      );
    }
    return provider;
  }, [walletProvider]);

  const signer = useMemo(() => provider.getSigner(), [provider]);

  const accountAddress = wallet ? wallet.accounts[0].address : '';

  const login = useCallback(async (connectorId: Connector) => {}, []);

  const logOut = useCallback(async () => {}, []);

  // Disconnect wallet if it's connected to the wrong network. Note: ideally
  // we'd instead switch the network automatically, but this seems to cause
  // issues with certain wallets such as MetaMask
  useEffect(() => {
    if (
      typeof connectedChain?.id !== 'undefined' &&
      connectedChain?.id !== `0x${config.chainId.toString(16)}`
    )
      setChain({ chainId: `0x${config.chainId.toString(16)}` });
  }, [connectedChain]);

  const { t } = useTranslation();

  const copyWalletAddress = useCopyToClipboard(
    t('interactive.copy.walletAddress')
  );

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  const handleLogin = async (connector: Connector) => {
    await login(connector);
    closeAuthModal();
  };

  return (
    <AuthContext.Provider
      value={{
        accountAddress,
        login,
        logOut,
        openAuthModal,
        closeAuthModal,
        provider: provider || undefined,
        signer: signer || undefined,
      }}
    >
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        accountAddress={accountAddress}
        onLogOut={async () => {
          await disconnect(wallet as any);
          closeAuthModal();
        }}
        onLogin={handleLogin}
        onCopyAccountAddress={copyWalletAddress}
      />

      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
