import { MutationObserverOptions, useMutation } from '@tanstack/react-query';

import {
  EnterMarketsInput,
  EnterMarketsOutput,
  enterMarkets,
} from '@/clients/api';
import FunctionKey from '@/constants/functionKey';
import { getQueryClient } from '@/app/get-query-client';
const queryClient = getQueryClient();

const useEnterMarkets = (
  options?: MutationObserverOptions<
    EnterMarketsOutput,
    Error,
    EnterMarketsInput
  >
) =>
  useMutation({
    mutationKey: [FunctionKey.ENTER_MARKETS],
    mutationFn: enterMarkets,
    ...options,
    onSuccess: (...onSuccessParams) => {
      queryClient.invalidateQueries({
        queryKey: [FunctionKey.GET_MAIN_ASSETS_IN_ACCOUNT],
      });
      queryClient.invalidateQueries({
        queryKey: [FunctionKey.GET_ISOLATED_POOLS],
      });

      if (options?.onSuccess) {
        options.onSuccess(...onSuccessParams);
      }
    },
  });

export default useEnterMarkets;
