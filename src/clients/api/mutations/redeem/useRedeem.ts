import { MutationObserverOptions, useMutation } from '@tanstack/react-query';
import { VToken } from '@/types';
import redeem, {
  RedeemInput,
  RedeemOutput,
} from '@/clients/api/mutations/redeem';
import { useVTokenContract } from '@/clients/contracts/hooks';
import FunctionKey from '@/constants/functionKey';
import { VBep20 } from '@/types/contracts';
import { getQueryClient } from '@/app/get-query-client';

const queryClient = getQueryClient();

const useRedeem = (
  { vToken }: { vToken: VToken },
  options?: MutationObserverOptions<
    RedeemOutput,
    Error,
    Omit<RedeemInput, 'tokenContract' | 'accountAddress'>
  >
) => {
  const tokenContract = useVTokenContract(vToken);

  return useMutation({
    mutationKey: [FunctionKey.REDEEM],
    mutationFn: (params) =>
      redeem({
        tokenContract: tokenContract as VBep20,
        ...params,
      }),
    ...options,
    onSuccess: async (...onSuccessParams) => {
      const accountAddress = await tokenContract.signer.getAddress();

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

export default useRedeem;
