import Auction from "./components/Auction";
import Gnar from "./components/Gnar";
import { useStore } from 'react-stores';
import { gnarEnvStore } from '../../store';

function Top() {
	const { auctionBG } = useStore(gnarEnvStore);
	let currentBG: string = '#d5d7e1';
	switch (auctionBG) {
		case 0:
			currentBG = '#d5d7e1';
			break;
		case 1:
			currentBG = '#e1d7d5';
			break;
		default:
			currentBG = '#d5d7e1';
			break;
	}
	return (
		<div className='pt-24 flex items-center' style={{backgroundColor: currentBG}}>
			<div className='sm:grid sm:grid-cols-2 gap-2'>
				<div className='flex justify-center'>
					<div className='w-3/5'>
						<Gnar gnarId="9999"/>
					</div>
				</div>
				<div className='pt-6 px-4 sm:pt-2 pb-8'>
					<Auction />
				</div>
			</div>
		</div>
	);
}
  
export default Top;