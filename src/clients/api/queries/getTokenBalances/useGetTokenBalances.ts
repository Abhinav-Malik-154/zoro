import {
  QueryObserverOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';

import {
  GetTokenBalancesInput,
  GetTokenBalancesOutput,
  getTokenBalances,
} from '@/clients/api';
import { useMulticall } from '@/clients/web3';
import FunctionKey from '@/constants/functionKey';
import { useAuth } from '@/context/AuthContext';

export type Options = QueryObserverOptions<
  GetTokenBalancesOutput,
  Error,
  GetTokenBalancesOutput,
  GetTokenBalancesOutput,
  [
    FunctionKey.GET_TOKEN_BALANCES,
    {
      accountAddress: string;
    },
    ...string[]
  ]
>;

const useGetTokenBalances = (
  {
    accountAddress,
    tokens,
  }: Omit<GetTokenBalancesInput, 'multicall' | 'provider'>,
  options?: Partial<UseQueryOptions>
) => {
  const multicall = useMulticall();
  const { provider } = useAuth();

  // Sort addresses alphabetically to prevent unnecessary re-renders
  const sortedTokenAddresses = [...tokens].map((token) => token.address).sort();

  const result = useQuery({
    queryKey: [
      FunctionKey.GET_TOKEN_BALANCES,
      {
        accountAddress,
      },
      ...sortedTokenAddresses,
    ],
    queryFn: () =>
      getTokenBalances({ multicall, accountAddress, tokens, provider }),
    ...(options ? options : {}),
  });
  return result;
};

export default useGetTokenBalances;
