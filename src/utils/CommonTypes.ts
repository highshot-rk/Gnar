import { BigNumberish } from '@ethersproject/bignumber';
export interface Bid {
  nounId: BigNumberish;
  sender: string;
  value: BigNumberish;
  extended: boolean;
  transactionHash: string;
  timestamp: BigNumberish;
}