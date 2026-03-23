/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import BorrowForm from './BorrowForm';
import RepayForm from './RepayForm';
import SupplyForm from './SupplyForm';
import WithdrawForm from './WithdrawForm';
import {
  Modal,
  ModalProps,
  TabContent,
  Tabs,
  TokenIconWithSymbol,
} from '@/components';
import AssetAccessor from '@/containers/AssetAccessor';
import React, { useState } from 'react';
import { useTranslation } from '@/translation';
import { VToken } from '@/types';

export interface OperationModalProps {
  onClose: ModalProps['handleClose'];
  vToken: VToken;
  poolComptrollerAddress: string;
  initialActiveTabIndex?: number;
}

const OperationModal: React.FC<OperationModalProps> = ({
  onClose,
  vToken,
  poolComptrollerAddress,
  initialActiveTabIndex = 0,
}) => {
  const { t } = useTranslation();
  const [isValidAllowance, setIsValidAllowance] = useState(true);

  const tabsContent: TabContent[] = [
    {
      title: t('operationModal.supplyTabTitle'),
      content: (
        <AssetAccessor
          vToken={vToken}
          poolComptrollerAddress={poolComptrollerAddress}
          connectWalletMessage={t('operationModal.supply.connectWalletMessage')}
          approveTokenMessage={t('operationModal.supply.enableToken.title', {
            symbol: vToken.underlyingToken.symbol,
          })}
          setIsValidAllowance={setIsValidAllowance}
          isValidAllowance={isValidAllowance}
          action='supply'
        >
          {({ asset, pool }) => (
            <SupplyForm
              asset={asset}
              pool={pool}
              onCloseModal={onClose}
              isValidAllowance={isValidAllowance}
              setIsValidAllowance={setIsValidAllowance}
            />
          )}
        </AssetAccessor>
      ),
    },
    {
      title: t('operationModal.withdrawTabTitle'),
      content: (
        <AssetAccessor
          vToken={vToken}
          poolComptrollerAddress={poolComptrollerAddress}
          connectWalletMessage={t(
            'operationModal.withdraw.connectWalletMessage'
          )}
          approveTokenMessage={t('operationModal.withdraw.enableToken.title', {
            symbol: vToken.underlyingToken.symbol,
          })}
          action='withdraw'
        >
          {({ asset, pool }) => (
            <WithdrawForm asset={asset} pool={pool} onCloseModal={onClose} />
          )}
        </AssetAccessor>
      ),
    },
    {
      title: t('operationModal.borrowTabTitle'),
      content: (
        <AssetAccessor
          vToken={vToken}
          poolComptrollerAddress={poolComptrollerAddress}
          connectWalletMessage={t('operationModal.borrow.connectWalletMessage')}
          approveTokenMessage={t('operationModal.borrow.enableToken.title', {
            symbol: vToken.underlyingToken.symbol,
          })}
          action='borrow'
        >
          {({ asset, pool }) => (
            <BorrowForm asset={asset} pool={pool} onCloseModal={onClose} />
          )}
        </AssetAccessor>
      ),
    },
    {
      title: t('operationModal.repayTabTitle'),
      content: (
        <AssetAccessor
          vToken={vToken}
          poolComptrollerAddress={poolComptrollerAddress}
          connectWalletMessage={t('operationModal.repay.connectWalletMessage')}
          approveTokenMessage={t('operationModal.repay.enableToken.title', {
            symbol: vToken.underlyingToken.symbol,
          })}
          action='repay'
          setIsValidAllowance={setIsValidAllowance}
          isValidAllowance={isValidAllowance}
        >
          {({ asset, pool }) => (
            <RepayForm
              asset={asset}
              pool={pool}
              onCloseModal={onClose}
              isValidAllowance={isValidAllowance}
              setIsValidAllowance={setIsValidAllowance}
            />
          )}
        </AssetAccessor>
      ),
    },
  ];

  return (
    <Modal
      isOpen
      title={
        <TokenIconWithSymbol token={vToken.underlyingToken} variant='h4' />
      }
      handleClose={onClose}
    >
      <Tabs
        tabsContent={tabsContent}
        initialActiveTabIndex={initialActiveTabIndex}
      />
    </Modal>
  );
};

export default OperationModal;
