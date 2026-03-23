import {
  QueryObserverOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import { VToken } from '@/types';

import getVTokenInterestRateModel, {
  GetVTokenInterestRateModelInput,
  GetVTokenInterestRateModelOutput,
} from '@/clients/api/queries/getVTokenInterestRateModel';
import { useVTokenContract } from '@/clients/contracts/hooks';
import FunctionKey from '@/constants/functionKey';

type Options = QueryObserverOptions<
  GetVTokenInterestRateModelOutput,
  Error,
  GetVTokenInterestRateModelOutput,
  GetVTokenInterestRateModelOutput,
  [FunctionKey.GET_V_TOKEN_INTEREST_RATE_MODEL, { vTokenAddress: string }]
>;

const useGetVTokenInterestRateModel = (
  { vToken }: { vToken: VToken },
  options?: Partial<UseQueryOptions>
) => {
  const vTokenContract = useVTokenContract(vToken);

  return useQuery({
    queryKey: [
      FunctionKey.GET_V_TOKEN_INTEREST_RATE_MODEL,
      { vTokenAddress: vToken.address },
    ],
    queryFn: () =>
      getVTokenInterestRateModel({
        vTokenContract,
      } as GetVTokenInterestRateModelInput),
    ...(options ? options : {}),
  });
};

export default useGetVTokenInterestRateModel;
