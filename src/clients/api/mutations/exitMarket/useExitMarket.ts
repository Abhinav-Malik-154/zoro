import { MutationObserverOptions, useMutation } from '@tanstack/react-query';

import { ExitMarketInput, ExitMarketOutput, exitMarket } from '@/clients/api';
import FunctionKey from '@/constants/functionKey';
import { getQueryClient } from '@/app/get-query-client';
const queryClient = getQueryClient();

const useExitMarket = (
  options?: MutationObserverOptions<ExitMarketOutput, Error, ExitMarketInput>
) =>
  useMutation({
    mutationKey: [FunctionKey.EXIT_MARKET],
    mutationFn: exitMarket,
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

export default useExitMarket;
