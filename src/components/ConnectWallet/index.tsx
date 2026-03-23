/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import React, { PropsWithChildren } from 'react';
import { useTranslation } from '@/translation';

import { useAuth } from '@/context/AuthContext';
import { useConnectWallet } from '@web3-onboard/react';

import { SecondaryButton } from '../Button';
import { NoticeInfo } from '../Notice';
import { useStyles } from './styles';

export interface PromptProps {
  message: string;
  openAuthModal: () => void;
  className?: string;
  connected: boolean;
}

export const Prompt = ({
  message,
  openAuthModal,
  className,
  children,
  connected,
}: PropsWithChildren<PromptProps>) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  // Render prompt if user aren't connected with any wallet
  if (connected) {
    return <>{children}</>;
  }
  return (
    <div css={styles.container} className={className}>
      <NoticeInfo css={styles.notice} description={message} />

      <SecondaryButton
        fullWidth
        onClick={wallet ? openAuthModal : async () => await connect()}
        className='custom-btn-wrap'
      >
        {t('connectWallet.connectButton')}
      </SecondaryButton>
    </div>
  );
};

export const ConnectWallet = (
  props: PropsWithChildren<Omit<PromptProps, 'connected' | 'openAuthModal'>>
) => {
  const { accountAddress, openAuthModal } = useAuth();
  return (
    <Prompt
      {...props}
      openAuthModal={openAuthModal}
      connected={!!accountAddress}
    />
  );
};
