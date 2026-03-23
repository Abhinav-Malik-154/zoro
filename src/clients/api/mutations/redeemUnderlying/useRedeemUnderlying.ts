import { MutationObserverOptions, useMutation } from '@tanstack/react-query';
import { VToken } from '@/types';
import redeemUnderlying, {
  RedeemUnderlyingInput,
  RedeemUnderlyingOutput,
} from '@/clients/api/mutations/redeemUnderlying';
import { useVTokenContract } from '@/clients/contracts/hooks';
import FunctionKey from '@/constants/functionKey';
import { getQueryClient } from '@/app/get-query-client';

const queryClient = getQueryClient();

const useRedeemUnderlying = (
  { vToken }: { vToken: VToken },
  options?: MutationObserverOptions<
    RedeemUnderlyingOutput,
    Error,
    Omit<RedeemUnderlyingInput, 'vTokenContract' | 'accountAddress'>
  >
) => {
  const vTokenContract = useVTokenContract(vToken);

  return useMutation({
    mutationKey: [FunctionKey.REDEEM_UNDERLYING],
    mutationFn: (params) =>
      redeemUnderlying({
        vTokenContract,
        ...params,
      } as RedeemUnderlyingInput),
    ...options,
    onSuccess: async (...onSuccessParams) => {
      const accountAddress = await vTokenContract.signer.getAddress();

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

export default useRedeemUnderlying;
