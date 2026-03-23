import { QueryObserverOptions, useQuery } from '@tanstack/react-query';

import {
  GetBalanceOfInput,
  GetBalanceOfOutput,
  getBalanceOf,
} from '@/clients/api';
import FunctionKey from '@/constants/functionKey';
import { useAuth } from '@/context/AuthContext';

type Options = QueryObserverOptions<
  GetBalanceOfOutput,
  Error,
  GetBalanceOfOutput,
  GetBalanceOfOutput,
  [
    FunctionKey.GET_BALANCE_OF,
    {
      accountAddress: string;
      tokenAddress: string;
    }
  ]
>;

const useGetBalanceOf = (
  { accountAddress, token }: Omit<GetBalanceOfInput, 'signer' | 'provider'>,
  options?: Options
) => {
  const { provider } = useAuth();

  return useQuery({
    queryKey: [
      FunctionKey.GET_BALANCE_OF,
      {
        accountAddress,
        tokenAddress: token.address,
      },
    ],
    queryFn: () => getBalanceOf({ provider, accountAddress, token }),
    ...(options ? options : {}),
  });
};

export default useGetBalanceOf;
