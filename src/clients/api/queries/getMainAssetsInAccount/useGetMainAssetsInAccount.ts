import {
  QueryObserverOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import { getContractAddress } from '@/utilities';

import getMainAssetsInAccount, {
  GetMainAssetsInAccountInput,
  GetMainAssetsInAccountOutput,
} from '@/clients/api/queries/getMainAssetsInAccount';
import { useComptrollerContract } from '@/clients/contracts/hooks';
import FunctionKey from '@/constants/functionKey';

const mainPoolComptrollerAddress = getContractAddress('comptroller');

type Options = QueryObserverOptions<
  GetMainAssetsInAccountOutput,
  Error,
  GetMainAssetsInAccountOutput,
  GetMainAssetsInAccountOutput,
  [
    FunctionKey.GET_MAIN_ASSETS_IN_ACCOUNT,
    Omit<GetMainAssetsInAccountInput, 'comptrollerContract'>
  ]
>;

const useGetMainAssetsInAccount = (
  { accountAddress }: Omit<GetMainAssetsInAccountInput, 'comptrollerContract'>,
  options?: Partial<UseQueryOptions>
) => {
  const comptrollerContract = useComptrollerContract(
    mainPoolComptrollerAddress
  );

  return useQuery({
    queryKey: [FunctionKey.GET_MAIN_ASSETS_IN_ACCOUNT, { accountAddress }],
    queryFn: () =>
      getMainAssetsInAccount({ comptrollerContract, accountAddress }),
    ...(options ? options : {}),
  });
};

export default useGetMainAssetsInAccount;
