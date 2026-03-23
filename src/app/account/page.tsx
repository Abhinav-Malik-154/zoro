'use client';

import { useGetPools } from '@/clients/api';
import { useAuth } from '@/context/AuthContext';
import { AccountUi } from '@/views/Account';

const Account: React.FC = () => {
  const { accountAddress } = useAuth();
  const { data: getPoolsData, isLoading: isGetPoolsLoading } = useGetPools({
    accountAddress,
  });

  //const { data: getVaultsData, isLoading: isGetVaultsLoading } = useGetVaults({
  //accountAddress,
  //});

  //const isFetching = isGetPoolsLoading || isGetVaultsLoading;
  const isFetching = isGetPoolsLoading;

  return (
    <AccountUi
      isFetching={isFetching}
      pools={getPoolsData?.pools || []}
      vaults={[]}
    />
  );
};

export default Account;
