import { useAuth } from '@/context/AuthContext';
import { getVTokenByAddress } from '@/utilities';
import { useParams } from 'next/navigation';

export const useMarketPage = () => {
  const { vTokenAddress, poolComptrollerAddress } = useParams() as {
    vTokenAddress: string;
    poolComptrollerAddress: string;
  };
  const { accountAddress } = useAuth();
  const vToken = getVTokenByAddress(vTokenAddress);

  return {
    vToken,
    poolComptrollerAddress,
    accountAddress,
  };
};
