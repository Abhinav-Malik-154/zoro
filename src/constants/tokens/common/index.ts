import { Token } from '@/types';

import aave from '@/assets/img/tokens/aave.svg';
import dai from '@/assets/img/tokens/dai.svg';
import doge from '@/assets/img/tokens/doge.svg';
import eth from '@/assets/img/tokens/eth.svg';
import link from '@/assets/img/tokens/link.svg';
import pepe from '@/assets/img/tokens/pepe.jpeg';
import uni from '@/assets/img/tokens/uni.jpeg';
import usdc from '@/assets/img/tokens/usdc.svg';
import usdt from '@/assets/img/tokens/usdt.svg';
import wbtc from '@/assets/img/tokens/btcb.svg';
import bnb from '@/assets/img/tokens/btcb.svg';
import sol from '@/assets/img/tokens/sol.svg';

export const TOKEN_INFO = {
  aave: {
    address: '',
    decimals: 18,
    symbol: 'AAVE',
    asset: aave,
  } as Token,
  dai: {
    address: '',
    decimals: 18,
    symbol: 'DAI',
    asset: dai,
  } as Token,
  doge: {
    address: '',
    decimals: 8,
    symbol: 'DOGE',
    asset: doge,
  } as Token,
  eth: {
    address: '',
    decimals: 18,
    symbol: 'ETH',
    asset: eth,
    isNative: true,
  } as Token,
  link: {
    address: '',
    decimals: 18,
    symbol: 'LINK',
    asset: link,
  } as Token,
  pepe: {
    address: '',
    decimals: 18,
    symbol: 'PEPE',
    asset: pepe,
  } as any,
  uni: {
    address: '',
    decimals: 18,
    symbol: 'UNI',
    asset: uni,
  } as any,
  usdc: {
    address: '',
    decimals: 6,
    symbol: 'USDC',
    asset: usdc,
  } as Token,
  usdt: {
    address: '',
    decimals: 6,
    symbol: 'USDT',
    asset: usdt,
  } as Token,
  wbtc: {
    address: '',
    decimals: 8,
    symbol: 'WBTC',
    asset: wbtc,
  } as Token,
  bnb: {
    address: '',
    decimals: 8,
    symbol: 'BNB',
    asset: bnb,
  } as Token,
  sol: {
    address: '',
    decimals: 8,
    symbol: 'SOL',
    asset: sol,
  } as Token,
};
