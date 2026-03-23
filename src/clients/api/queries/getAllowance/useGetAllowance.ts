import {
  QueryObserverOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import { Token } from '@/types';

import getAllowance, {
  GetAllowanceInput,
  GetAllowanceOutput,
} from '@/clients/api/queries/getAllowance';
import { useTokenContract } from '@/clients/contracts/hooks';
import FunctionKey from '@/constants/functionKey';

export type UseGetAllowanceQueryKey = [
  FunctionKey.GET_TOKEN_ALLOWANCE,
  {
    tokenAddress: string;
    spenderAddress: string;
    accountAddress: string;
    isValidAllowance?: boolean;
  }
];

type Options = QueryObserverOptions<
  GetAllowanceOutput,
  Error,
  GetAllowanceOutput,
  GetAllowanceOutput,
  UseGetAllowanceQueryKey
>;

const useGetAllowance = (
  {
    token,
    spenderAddress,
    accountAddress,
    isValidAllowance,
  }: Omit<GetAllowanceInput, 'tokenContract'> & { token: Token },
  options?: Partial<UseQueryOptions>
) => {
  const tokenContract = useTokenContract(token);

  return useQuery({
    queryKey: [
      FunctionKey.GET_TOKEN_ALLOWANCE,
      {
        tokenAddress: token.address,
        spenderAddress,
        accountAddress,
        isValidAllowance,
      },
    ],
    queryFn: () =>
      getAllowance({
        tokenContract,
        spenderAddress,
        accountAddress,
      }),
    ...(options ? options : {}),
  });
};

export default useGetAllowance;
