import { MutationObserverOptions, useMutation } from '@tanstack/react-query';
import { VToken } from '@/types';

import { RepayInput, RepayOutput, repay } from '@/clients/api';
import FunctionKey from '@/constants/functionKey';
import { useAuth } from '@/context/AuthContext';
import { getQueryClient } from '@/app/get-query-client';

type Options = MutationObserverOptions<
  RepayOutput,
  Error,
  Omit<RepayInput, 'signer' | 'vToken'>
>;

const queryClient = getQueryClient();

const useRepay = ({ vToken }: { vToken: VToken }, options?: Options) => {
  const { signer } = useAuth();

  return useMutation({
    mutationKey: [FunctionKey.REPAY],
    mutationFn: (params) =>
      repay({
        signer,
        vToken,
        ...params,
      }),
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [FunctionKey.GET_V_TOKEN_BALANCES_ALL],
      });
      queryClient.invalidateQueries({
        queryKey: [FunctionKey.GET_MAIN_MARKETS],
      });
      queryClient.invalidateQueries({
        queryKey: [FunctionKey.GET_ISOLATED_POOLS],
      });
    },
  });
};

export default useRepay;
