import { useStore } from 'react-stores';
import { gnarAuctionStore } from '../../../store';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import TimeCounter from './auction/TimeCounter';
import BidWallet from './auction/BidWallet.js';
import BidHistory from './auction/BidHistory';

dayjs.extend(utc);

function Auction() {
	const { auctionStartTime, gnarId } = useStore(gnarAuctionStore);
	const auctionStartTimeUTC = dayjs(auctionStartTime)
		.utc()
		.format('MMM DD YYYY / HH : MM');
	return (
		<div>
      <div className='font-Shadeerah text-2xl'>
				{ auctionStartTimeUTC }
			</div>
			<div className='flex items-center pt-4 gap-3'>
				<div className='font-brick text-5xl sm:text-7xl'>Gnar { gnarId }</div>
				<div><FontAwesomeIcon icon={faArrowAltCircleLeft} size='3x'></FontAwesomeIcon></div>
				<div><FontAwesomeIcon icon={faArrowAltCircleRight} size='3x'></FontAwesomeIcon></div>
			</div>
			<div className='pt-8'>
				<TimeCounter />
			</div>
			<div className='pt-10'>
				<BidWallet />
			</div>
			<div>
				<BidHistory />
			</div>
		</div>
	);
}
  
export default Auction;