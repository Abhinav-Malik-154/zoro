import { QueryObserverOptions, useQuery } from '@tanstack/react-query';

import getMainMarkets, {
  GetMainMarketsOutput,
} from '@/clients/api/queries/getMainMarkets';
import { useMulticall } from '@/clients/web3';
import {
  useComptrollerContract,
  useVenusLensContract,
} from '@/clients/contracts/hooks';
import { getContractAddress } from '@/utilities';
import { DEFAULT_REFETCH_INTERVAL_MS } from '@/constants/defaultRefetchInterval';
import FunctionKey from '@/constants/functionKey';

type Options = QueryObserverOptions<
  GetMainMarketsOutput,
  Error,
  GetMainMarketsOutput,
  GetMainMarketsOutput,
  [FunctionKey.GET_ISOLATED_MARKETS]
>;

const useGetIsolatedMarkets = (options?: Options) => {
  const venusLensContract = useVenusLensContract();
  const multicall = useMulticall();
  const comptrollerAddress = getContractAddress('degen:comptroller');
  const comptroller = useComptrollerContract(comptrollerAddress);

  const result = useQuery({
    queryKey: [FunctionKey.GET_ISOLATED_MARKETS],
    queryFn: () =>
      getMainMarkets({ multicall, venusLensContract, comptroller }),
    refetchInterval: DEFAULT_REFETCH_INTERVAL_MS,
    ...(options ? options : {}),
  });

  return result;
};

export default useGetIsolatedMarkets;
