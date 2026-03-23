import { QueryObserverOptions, useQuery } from '@tanstack/react-query';

import { getBlockNumber } from '@/clients/api/';
import { BLOCK_TIME_MS } from '@/constants/zk';
import FunctionKey from '@/constants/functionKey';
import { useAuth } from '@/context/AuthContext';

interface GetBlockNumberOutput {
  blockNumber: number;
}

type Options = QueryObserverOptions<
  GetBlockNumberOutput,
  Error,
  GetBlockNumberOutput,
  GetBlockNumberOutput,
  [FunctionKey.GET_BLOCK_NUMBER]
>;

const useGetBlockNumber = (options?: Options) => {
  const { provider } = useAuth();

  return useQuery({
    queryKey: [FunctionKey.GET_BLOCK_NUMBER],
    queryFn: () => getBlockNumber({ provider }),
    refetchInterval: BLOCK_TIME_MS,
    ...(options ? options : {}),
  });
};

export default useGetBlockNumber;
