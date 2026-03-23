import BigNumber from 'bignumber.js';
import {
  QueryObserverOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import { VToken } from '@/types';

import getVTokenApySimulations, {
  GetVTokenApySimulationsOutput,
} from '@/clients/api/queries/getVTokenApySimulations';
import useGetVTokenInterestRateModel from '@/clients/api/queries/getVTokenInterestRateModel/useGetVTokenInterestRateModel';
import { useMulticall } from '@/clients/web3';
import FunctionKey from '@/constants/functionKey';

type Options = QueryObserverOptions<
  GetVTokenApySimulationsOutput,
  Error,
  GetVTokenApySimulationsOutput,
  GetVTokenApySimulationsOutput,
  [FunctionKey.GET_V_TOKEN_APY_SIMULATIONS, { vTokenAddress: string }]
>;

const useGetVTokenApySimulations = (
  {
    vToken,
    isIsolatedPoolMarket,
    reserveFactorMantissa,
  }: {
    vToken: VToken;
    isIsolatedPoolMarket: boolean;
    reserveFactorMantissa?: BigNumber;
  },
  options?: Partial<UseQueryOptions>
) => {
  const multicall = useMulticall();
  const { data: interestRateModelData } = useGetVTokenInterestRateModel({
    vToken,
  });

  return useQuery({
    queryKey: [
      FunctionKey.GET_V_TOKEN_APY_SIMULATIONS,
      { vTokenAddress: vToken.address },
    ],
    queryFn: () =>
      getVTokenApySimulations({
        multicall,
        reserveFactorMantissa: reserveFactorMantissa || new BigNumber(0),
        interestRateModelContractAddress:
          (
            interestRateModelData as {
              contractAddress: string;
            }
          )?.contractAddress || '',
        isIsolatedPoolMarket,
      }),
    enabled:
      (options?.enabled === undefined || options?.enabled) &&
      (
        interestRateModelData as {
          contractAddress: string;
        }
      )?.contractAddress !== undefined &&
      reserveFactorMantissa !== undefined,
    ...(options ? options : {}),
  });
};

export default useGetVTokenApySimulations;
