import { useStore } from 'react-stores';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { gnarAuctionStore } from '../../../../store';
import { Bid } from '../../../../utils/CommonTypes';
import { TrancatedAmount } from '../../../../utils/funcs';

dayjs.extend(duration);

function TimeCounter() {
  const { bidList, auctionEndTime } = useStore(gnarAuctionStore);
  const latestBid: Bid | null = bidList.length > 0 ? bidList[bidList.length - 1] : null;
  const timerDuration = dayjs.duration(auctionEndTime - Date.now());
  const h = Math.floor(timerDuration.hours());
  const m = Math.floor(timerDuration.minutes());
  const s = Math.floor(timerDuration.seconds());
	return (
		<div className='grid grid-cols-2 gap-4 font-Shadeerah'>
      <div className='border-r-2 border-gray-700'>
        <div className='text-2xl'>Current Bid</div>
        <div className='text-4xl font-bold pt-2'>Ξ {latestBid && TrancatedAmount(latestBid.value)}</div>
      </div>
      <div className='pl-4'>
        <div className='text-2xl'>Ends In</div>
        <div className='text-4xl font-bold pt-2'>{latestBid && (
          <span>
            <span>
              {h}<span className='text-2xl'>h</span>
            </span>
            <span className='pl-2'>
              {m}<span className='text-2xl'>m</span>
            </span>
            <span className='pl-2'>
              {s}<span className='text-2xl'>s</span>
            </span>
          </span>
        )}</div>
      </div>
		</div>
	);
}
  
export default TimeCounter;