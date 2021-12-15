import temp_gnar from '../../assets/images/temp_gnar.svg';
import HistoryCollection from './components/RecentList/HistoryCollection';
import { useStore } from 'react-stores';
import { gnarAuctionStore } from '../../store';

const RecentList = () => {
  const { gnarId } : { gnarId: number} = useStore(gnarAuctionStore);
  return (
    <div className='pt-10 sm:pt-32'>
      <div className='sm:grid sm:grid-cols-2 gap-4'>
        <div className='font-craft text-4xl sm:text-8xl font-black flex justify-center sm:text-right sm:justify-end' style={{
          lineHeight: '1.375'
        }}>
          ONE GNAR,<br/>
          EVERY <br/>
          666 BLOCKS,<br/>
          FOREVER.
        </div>
        <div className='flex justify-center'>
          <img src={temp_gnar} alt='temp gnar' className='w-full sm:w-1/2' />
        </div>
      </div>
      <div className='pt-12'>
        <HistoryCollection latestGnarId={gnarId} historyCount={10}/>
      </div>
    </div>
  )
};

export default RecentList;
