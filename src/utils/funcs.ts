import { utils } from 'ethers';
import { BigNumberish } from '@ethersproject/bignumber';
import { ChainId } from '@usedapp/core';
import { Bid } from './CommonTypes';

export function TrancatedAmount(amount: BigNumberish) {
  const ether_amount = utils.parseEther(amount.toString());
  return Number(utils.formatEther(ether_amount)).toFixed(2);
}

export function sortWithAmount(list: Array<Bid>) {
  return list.sort((a: Bid, b: Bid) => Number(b.value) - Number(a.value) );
}

type SupportedChains = ChainId.Rinkeby | ChainId.Mainnet | ChainId.Hardhat;
export const CHAIN_ID: SupportedChains = parseInt(process.env.REACT_APP_CHAIN_ID ?? '4');

export const ETHERSCAN_API_KEY = process.env.REACT_APP_ETHERSCAN_API_KEY ?? '';

const getBaseURL = (network: ChainId) => {
  switch (network) {
    case ChainId.Rinkeby:
      return 'https://rinkeby.etherscan.io/';
    default:
      return 'https://etherscan.io/';
  }
};

const BASE_URL = getBaseURL(CHAIN_ID);

export const buildEtherscanTxLink = (txHash: string): string => {
  const path = `tx/${txHash}`;
  return new URL(path, BASE_URL).toString();
};

export const buildEtherscanAddressLink = (address: string): string => {
  const path = `address/${address}`;
  return new URL(path, BASE_URL).toString();
};

const getApiBaseURL = (network: ChainId) => {
  switch (network) {
    case ChainId.Rinkeby:
      return `https://api-rinkeby.etherscan.io/`;
    default:
      return 'https://api.etherscan.io/';
  }
};

const API_BASE_URL = getApiBaseURL(CHAIN_ID);

export const buildEtherscanApiQuery = (
  address: string,
  module = 'contract',
  action = 'getsourcecode',
): string => {
  const params = new URLSearchParams({
    module,
    action,
    address,
    apikey: ETHERSCAN_API_KEY,
  });
  const path = `api?${params.toString()}`;
  return new URL(path, API_BASE_URL).toString();
};
