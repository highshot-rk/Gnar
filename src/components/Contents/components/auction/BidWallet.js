import { useStore } from 'react-stores';
import NumericInput from 'react-numeric-input';
import { gnarAuctionStore } from '../../../../store';
import { TrancatedAmount } from '../../../../utils/funcs';

function BidWallet() {
  const { bidList } = useStore(gnarAuctionStore);
  const latestBid = bidList.length > 0 ? bidList[bidList.length - 1] : null;
  const minBid = latestBid ? TrancatedAmount(latestBid.value) : 0.2;
  const handleBid = () => {
    // check validations and transaction
  }
	return (
		<div className='font-Shadeerah'>
      <div>Minimum bid: {minBid} ETH</div>
      <div className='flex items-center gap-2 sm:gap-10'>
        <div className='flex items-center'><NumericInput step={0.1} precision={2} value={minBid} min={minBid} className='h-12 rounded-md font-Shadeerah font-bold' />
          <div className='font-bold text-2xl pl-2'>ETH</div>
        </div>
        <div className='w-1/2'>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 rounded h-12 w-full text-lg" onClick={handleBid}>
            Bid
          </button>
        </div>
      </div>
		</div>
	);
}
  
export default BidWallet;