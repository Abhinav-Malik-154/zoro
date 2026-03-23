import { MutationObserverOptions, useMutation } from '@tanstack/react-query';
import { Token } from '@/types';

import {
  ApproveTokenInput,
  ApproveTokenOutput,
  approveToken,
} from '@/clients/api';
import { useTokenContract } from '@/clients/contracts/hooks';
import FunctionKey from '@/constants/functionKey';
import { getQueryClient } from '@/app/get-query-client';
const queryClient = getQueryClient();

const useApproveToken = (
  { token }: { token: Token },
  options?: MutationObserverOptions<
    ApproveTokenOutput,
    Error,
    Omit<ApproveTokenInput, 'tokenContract'>
  >
) => {
  const tokenContract = useTokenContract(token);

  return useMutation({
    mutationKey: [FunctionKey.APPROVE_TOKEN, { token }],
    mutationFn: (params) =>
      approveToken({
        tokenContract,
        ...params,
      }),
    ...options,
    onSuccess: async (...onSuccessParams) => {
      const { spenderAddress } = onSuccessParams[1];
      const accountAddress = await tokenContract.signer.getAddress();

      queryClient.invalidateQueries({
        queryKey: [
          FunctionKey.GET_TOKEN_ALLOWANCE,
          {
            tokenAddress: token.address,
            spenderAddress,
            accountAddress,
          },
        ],
      });

      if (options?.onSuccess) {
        options.onSuccess(...onSuccessParams);
      }
    },
  });
};

export default useApproveToken;
