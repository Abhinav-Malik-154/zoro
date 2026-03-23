'use client';

import { useGetPools } from '@/clients/api';
import { useAuth } from '@/context/AuthContext';
import { DashboardUi } from '@/views/Dashboard';
import { useState } from 'react';

const Dashboard: React.FC = () => {
  const { accountAddress } = useAuth();

  const [searchValue, setSearchValue] = useState('');

  const { data: getPoolData, isLoading: isGetPoolsLoading } = useGetPools({
    accountAddress,
  });

  return (
    <DashboardUi
      pools={getPoolData?.pools || []}
      isFetchingPools={isGetPoolsLoading}
      searchValue={searchValue}
      onSearchInputChange={setSearchValue}
    />
  );
};

export default Dashboard;
