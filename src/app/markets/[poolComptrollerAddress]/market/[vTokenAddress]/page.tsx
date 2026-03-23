/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

'use client';
import { useMarketPage } from '@/hooks/useMarketPage';
import { MarketPage } from '@/views/Market/MarketPage';

const Market = () => {
  const { vToken, poolComptrollerAddress, accountAddress } = useMarketPage();

  if (!vToken) {
    return (
      <h2
        css={{
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        Token invalid
      </h2>
    );
  }

  return (
    <MarketPage
      vToken={vToken}
      poolComptrollerAddress={poolComptrollerAddress}
      accountAddress={accountAddress}
    />
  );
};

export default Market;
