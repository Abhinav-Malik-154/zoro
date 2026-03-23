import { useMemo } from 'react';
import { useTranslation } from '@/translation';
import { Pool } from '@/types';
import { getContractAddress } from '@/utilities';

import { useGetIsolatedAssets } from '@/clients/api';

export interface UseGetMainPoolInput {
  accountAddress?: string;
}

export interface UseGetMainPoolOutput {
  isLoading: boolean;
  data?: {
    pool: Pool;
  };
}

const mainPoolComptrollerAddress = getContractAddress('degen:comptroller');

const useGetIsolatedPool = ({
  accountAddress,
}: UseGetMainPoolInput): UseGetMainPoolOutput => {
  const { data: getMainAssetsData, isLoading: isGetMainAssetsDataLoading } =
    useGetIsolatedAssets({
      accountAddress,
    });

  const { t } = useTranslation();

  const pool: Pool | undefined = useMemo(
    () =>
      getMainAssetsData?.assets && {
        comptrollerAddress: mainPoolComptrollerAddress,
        name: t('isolatedPool.name'),
        description: t('isolatedPool.description'),
        isIsolated: false,
        assets: getMainAssetsData.assets,
        userSupplyBalanceCents: getMainAssetsData.userTotalSupplyBalanceCents,
        userBorrowBalanceCents: getMainAssetsData.userTotalBorrowBalanceCents,
        userBorrowLimitCents: getMainAssetsData.userTotalBorrowLimitCents,
      },
    [getMainAssetsData?.assets]
  );

  return { isLoading: isGetMainAssetsDataLoading, data: pool && { pool } };
};

export default useGetIsolatedPool;
