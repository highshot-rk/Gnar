import Davatar from '@davatar/react';
import { useEthers } from '@usedapp/core';
import { BigNumberish, BigNumber } from '@ethersproject/bignumber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';
import { buildEtherscanTxLink, TrancatedAmount } from '../../../../utils/funcs';
import ShortAddress from '../../../utils/ShortAddress';

function OneHistory({address, bidDate = BigNumber.from(0), bidAmount = 0, transactionHash, showDate=false}: {address: string, bidDate?: BigNumber, bidAmount?: BigNumberish, transactionHash: string, showDate?: boolean }) {
  const { library: provider } = useEthers();
  const date = `${dayjs(bidDate.toNumber() * 1000).format('MMM DD')} at ${dayjs(
    bidDate.toNumber() * 1000,
  ).format('hh:mm a')}`;

  const txLink = buildEtherscanTxLink(transactionHash);

	return (
		<div className='flex items-center px-6 py-3 bg-gray-100 rounded-lg text-lg'>
      <div className={`${showDate && "w-1/2"}`}>
        <div className='flex'>
          <Davatar size={24} address={address} provider={provider} />
          { showDate && (
              <div className='pl-2 font-bold'><ShortAddress address={address} /></div>
            )
          }
        </div>
        { showDate && (<div className='text-gray-400'>{date}</div>) }
      </div>
      {!showDate && (
        <div className='pl-2 font-bold'><ShortAddress address={address} /></div>
      )}
      <div className='flex items-center justify-end w-full'>
        <div>Ξ</div>
        <div className='px-4'>{TrancatedAmount(bidAmount)}</div>
        <a href={txLink} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </div>
		</div>
	);
}
  
export default OneHistory;