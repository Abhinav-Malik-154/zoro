import { useMemo } from 'react';
import { Pool } from '@/types';
import { isFeatureEnabled } from '@/utilities';

import { useGetIsolatedPool, useGetMainPool } from '@/clients/api';
//import { useGetMainPool } from '@/clients/api';

export interface UseGetPoolsInput {
  accountAddress?: string;
}

export interface UseGetPoolsOutput {
  isLoading: boolean;
  data?: {
    pools: Pool[];
  };
}

const useGetPools = ({
  accountAddress,
}: UseGetPoolsInput): UseGetPoolsOutput => {
  const { data: getMainPoolData, isLoading: isGetMainPoolDataLoading } =
    useGetMainPool({
      accountAddress,
    });

  const { data: getIsolatedPoolData, isLoading: isGetIsolatedPoolDataLoading } =
    useGetIsolatedPool({
      accountAddress,
    });
  //const { data: getIsolatedPoolsData, isLoading: isGetIsolatedPoolsDataLoading } =
  //useGetIsolatedPools(
  //{
  //accountAddress,
  //},
  //{
  //enabled: isFeatureEnabled('isolatedPools'),
  //},
  //);

  const isLoading = isGetMainPoolDataLoading || isGetIsolatedPoolDataLoading;
  //const isLoading = isGetMainPoolDataLoading;

  const data = useMemo(() => {
    if (isLoading) {
      return { pools: [] };
    }

    const pools = (getMainPoolData?.pool ? [getMainPoolData?.pool] : []).concat(
      getIsolatedPoolData?.pool || []
    );

    return {
      pools,
    };
  }, [getMainPoolData?.pool, getIsolatedPoolData?.pool]);
  //}, [getMainPoolData?.pool]);

  return { isLoading, data };
};

export default useGetPools;
