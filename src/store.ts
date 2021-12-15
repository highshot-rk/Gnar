import { Store } from 'react-stores';
import { Bid } from './utils/CommonTypes';

export interface IGnarAuctionState {
  gnarId: number,
  auctionStartTime: number,
  auctionEndTime: number,
  bidList: Array<Bid>
}

export const gnarAuctionStore = new Store<IGnarAuctionState>({
  gnarId: 100,
  auctionStartTime: Date.now(),
  auctionEndTime: Date.now() + 1000 * 3 * 60 * 60,
  bidList: [{
    nounId: 110,
    sender: '0x66B8304a9ef672EBA423CE5878E404e371A7F140',
    value: 0.123453324,
    extended: false,
    transactionHash: 'yyyyyyyyyy',
    timestamp: Date.now() - 1000 * 3 * 60
  },
  {
    nounId: 110,
    sender: '0x66B8304a9ef672EBA423CE5878E404e371A7F140',
    value: 0.123453324,
    extended: false,
    transactionHash: 'yyyyyyyyyy',
    timestamp: Date.now() - 1000 * 3 * 60
  },
  {
    nounId: 110,
    sender: '0x66B8304a9ef672EBA423CE5878E404e371A7F140',
    value: 0.123453324,
    extended: false,
    transactionHash: 'yyyyyyyyyy',
    timestamp: Date.now() - 1000 * 3 * 60
  },
  {
    nounId: 110,
    sender: '0x66B8304a9ef672EBA423CE5878E404e371A7F140',
    value: 0.123453324,
    extended: false,
    transactionHash: 'yyyyyyyyyy',
    timestamp: Date.now() - 1000 * 3 * 60
  },
  {
    nounId: 110,
    sender: '0x66B8304a9ef672EBA423CE5878E404e371A7F140',
    value: 0.123453324,
    extended: false,
    transactionHash: 'yyyyyyyyyy',
    timestamp: Date.now() - 1000 * 3 * 60
  },
  {
    nounId: 111,
    sender: '0x66B8304a9ef672EBA423CE5878E404e371A7F140',
    value: 26.4345,
    extended: false,
    transactionHash: 'yyyyyyyyyy',
    timestamp: Date.now() - 1000 * 2 * 60
  }],
});

export interface IGnarEnvState {
  auctionBG: number
}

export const gnarEnvStore = new Store<IGnarEnvState> ({
  auctionBG: 0,
});