import { VToken } from '@/types';

import { TOKEN_INFO } from '../common/';

export const ZTOKEN_INFO = {
  // Main pool
  dai: {
    address: '',
    decimals: 8,
    symbol: 'zDAI',
    underlyingToken: TOKEN_INFO.dai,
  } as VToken,
  eth: {
    address: '',
    decimals: 8,
    symbol: 'zETH',
    underlyingToken: TOKEN_INFO.eth,
  } as VToken,
  usdc: {
    address: '',
    decimals: 8,
    symbol: 'zUSDC',
    underlyingToken: TOKEN_INFO.usdc,
  } as VToken,
  usdt: {
    address: '',
    decimals: 8,
    symbol: 'zUSDT',
    underlyingToken: TOKEN_INFO.usdt,
  } as VToken,
  wbtc: {
    address: '',
    decimals: 8,
    symbol: 'zWBTC',
    underlyingToken: TOKEN_INFO.wbtc,
  } as VToken,
  // Isolated assets
  'degen:aave': {
    address: '',
    decimals: 8,
    symbol: 'zAAVE',
    underlyingToken: TOKEN_INFO.aave,
  } as VToken,
  'degen:dai': {
    address: '',
    decimals: 8,
    symbol: 'zDAI',
    underlyingToken: TOKEN_INFO.dai,
  } as VToken,
  'degen:doge': {
    address: '',
    decimals: 8,
    symbol: 'zDOGE',
    underlyingToken: TOKEN_INFO.doge,
  } as VToken,
  'degen:eth': {
    address: '',
    decimals: 8,
    symbol: 'zETH',
    underlyingToken: TOKEN_INFO.eth,
  } as VToken,
  'degen:link': {
    address: '',
    decimals: 8,
    symbol: 'zLINK',
    underlyingToken: TOKEN_INFO.link,
  } as VToken,
  'degen:pepe': {
    address: '',
    decimals: 8,
    symbol: 'zPEPE',
    underlyingToken: TOKEN_INFO.pepe,
  } as VToken,
  'degen:usdc': {
    address: '',
    decimals: 8,
    symbol: 'zUSDC',
    underlyingToken: TOKEN_INFO.usdc,
  } as VToken,
  'degen:usdt': {
    address: '',
    decimals: 8,
    symbol: 'zUSDT',
    underlyingToken: TOKEN_INFO.usdt,
  } as VToken,
  'degen:uni': {
    address: '',
    decimals: 8,
    symbol: 'zUNI',
    underlyingToken: TOKEN_INFO.uni,
  } as VToken,
  'degen:wbtc': {
    address: '',
    decimals: 8,
    symbol: 'zWBTC',
    underlyingToken: TOKEN_INFO.wbtc,
  } as VToken,
  'degen:sol': {
    address: '',
    decimals: 8,
    symbol: 'zSOL',
    underlyingToken: TOKEN_INFO.sol,
  } as VToken,
};
