/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import DisabledActionNotice from './DisabledActionNotice';
import { useGetPool } from '@/clients/api';
import { ApproveToken, ConnectWallet, Spinner } from '@/components';
import { useAuth } from '@/context/AuthContext';
import useAssetInfo from '@/hooks/useAssetInfo';
import React from 'react';
import { Asset, Pool, TokenAction, VToken } from '@/types';
import { areTokensEqual, isTokenActionEnabled } from '@/utilities';

export interface AssetAccessorProps {
  vToken: VToken;
  poolComptrollerAddress: string;
  connectWalletMessage: string;
  approveTokenMessage: string;
  action: TokenAction;
  children: (props: { asset: Asset; pool: Pool }) => React.ReactNode;
  setIsValidAllowance?: (v: boolean) => void;
  isValidAllowance?: boolean;
}

const AssetAccessor: React.FC<AssetAccessorProps> = ({
  vToken,
  poolComptrollerAddress,
  children,
  connectWalletMessage,
  approveTokenMessage,
  action,
  setIsValidAllowance,
  isValidAllowance,
}) => {
  const { accountAddress } = useAuth();

  const { data: getPoolData } = useGetPool({
    poolComptrollerAddress,
    accountAddress,
  });
  const pool = getPoolData?.pool;
  const asset = pool?.assets.find((item) =>
    areTokensEqual(item.vToken, vToken)
  );
  const type = action === 'supply' || action === 'repay' ? 'supply' : 'borrow';

  const assetInfo = useAssetInfo({ asset, type });

  //console.log("underlying vtoken", vToken);
  if (
    !isTokenActionEnabled({
      token: vToken.underlyingToken,
      action,
    })
  ) {
    return (
      <DisabledActionNotice token={vToken.underlyingToken} action={action} />
    );
  }

  return (
    <ConnectWallet message={connectWalletMessage}>
      {pool && asset ? (
        type === 'borrow' ? (
          children({ asset, pool })
        ) : (
          <ApproveToken
            token={vToken.underlyingToken}
            spenderAddress={vToken.address}
            title={approveTokenMessage}
            assetInfo={assetInfo}
            setIsValidAllowance={setIsValidAllowance}
            isValidAllowance={isValidAllowance}
          >
            {children({ asset, pool })}
          </ApproveToken>
        )
      ) : (
        <Spinner />
      )}
    </ConnectWallet>
  );
};

export default AssetAccessor;
