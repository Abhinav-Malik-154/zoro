import { MutationObserverOptions, useMutation } from '@tanstack/react-query';
import { VToken } from '@/types';

import supply, {
  SupplyInput,
  SupplyOutput,
} from '@/clients/api/mutations/supply';
import FunctionKey from '@/constants/functionKey';
import { useAuth } from '@/context/AuthContext';
import { getQueryClient } from '@/app/get-query-client';
const queryClient = getQueryClient();

type Options = MutationObserverOptions<
  SupplyOutput,
  Error,
  Omit<SupplyInput, 'vToken' | 'signer'>
>;

const useSupply = ({ vToken }: { vToken: VToken }, options?: Options) => {
  const { signer, accountAddress } = useAuth();

  return useMutation({
    mutationKey: [FunctionKey.SUPPLY],
    mutationFn: (params) =>
      supply({
        vToken,
        signer,
        ...params,
      }),

    ...options,
    onSuccess: (...onSuccessParams) => {
      queryClient.invalidateQueries({
        queryKey: [FunctionKey.GET_V_TOKEN_BALANCES_ALL],
      });
      queryClient.invalidateQueries({
        queryKey: [
          FunctionKey.GET_V_TOKEN_BALANCE,
          {
            accountAddress,
            vTokenAddress: vToken.address,
          },
        ],
      });
      queryClient.invalidateQueries({
        queryKey: [FunctionKey.GET_MAIN_MARKETS],
      });
      queryClient.invalidateQueries({
        queryKey: [FunctionKey.GET_ISOLATED_POOLS],
      });

      if (options?.onSuccess) {
        options.onSuccess(...onSuccessParams);
      }
    },
  });
};

export default useSupply;
