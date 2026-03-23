'use client';

import { useGetPools } from '@/clients/api';
import { useAuth } from '@/context/AuthContext';
import { PoolUi } from '@/views/Pool';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

const PoolPage = () => {
  const { accountAddress } = useAuth();

  const { data: getPoolData, isLoading: isGetPoolLoading } = useGetPools({
    accountAddress,
  });

  const addressIncorrect = !isGetPoolLoading && !getPoolData?.pools;
  useEffect(() => {
    if (addressIncorrect) {
      redirect('/');
    }
  }, [addressIncorrect]);

  if (addressIncorrect) {
    return null;
  }

  return getPoolData?.pools.map((pool) => <PoolUi pool={pool} />);
};

export default PoolPage;
