import { useGetAsset, useGetVTokenApySimulations } from '@/clients/api';
import { COMPOUND_MANTISSA } from '@/constants/compoundMantissa';
import { VToken } from '@/types';
import { getContractAddress, areAddressesEqual } from '@/utilities';
import BigNumber from 'bignumber.js';
import React, { useMemo } from 'react';
import { MarketUi } from '.';

export const MarketPage = ({
  poolComptrollerAddress,
  vToken,
  accountAddress,
}: {
  vToken: VToken;
  poolComptrollerAddress: string;
  accountAddress: string;
}) => {
  const mainPoolComptrollerAddress = getContractAddress('comptroller');

  const isIsolatedPoolMarket = !areAddressesEqual(
    mainPoolComptrollerAddress,
    poolComptrollerAddress
  );

  const { data: getAssetData } = useGetAsset({
    vToken,
    accountAddress,
  });

  //const { data: chartData, isLoading: isChartDataLoading } = useGetChartData({
  //vToken,
  //});
  const isChartDataLoading = false;
  const chartData = {
    supplyChartData: [],
    borrowChartData: [],
  };

  const reserveFactorMantissa = useMemo(
    () =>
      getAssetData?.asset &&
      new BigNumber(getAssetData.asset.reserveFactor).multipliedBy(
        COMPOUND_MANTISSA
      ),
    [getAssetData?.asset?.reserveFactor]
  );

  const {
    isLoading: isInterestRateChartDataLoading,
    data: interestRateChartData = {
      apySimulations: [],
    },
  } = useGetVTokenApySimulations({
    vToken,
    reserveFactorMantissa,
    isIsolatedPoolMarket,
  });

  return (
    <MarketUi
      asset={getAssetData?.asset}
      poolComptrollerAddress={poolComptrollerAddress}
      isChartDataLoading={isChartDataLoading}
      {...chartData}
      isInterestRateChartDataLoading={isInterestRateChartDataLoading}
      interestRateChartData={(interestRateChartData as any).apySimulations}
    />
  );
};
