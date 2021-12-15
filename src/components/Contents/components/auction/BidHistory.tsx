import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import OneHistory from "./OneHistory";
import { useStore } from 'react-stores';
import { gnarAuctionStore } from '../../../../store';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import { Bid } from '../../../../utils/CommonTypes';
import { BigNumber } from '@ethersproject/bignumber';
import { sortWithAmount } from "../../../../utils/funcs";
import Gnar from '../Gnar';

function BidHistory() {
	const [showBidHistoryModal, setShowBidHistoryModal] = useState(false);
	const { bidList, gnarId } : {bidList: Array<Bid>, gnarId: number} = useStore(gnarAuctionStore);
	const showBidModalHandler = () => {
    setShowBidHistoryModal(true);
  };
  const dismissBidModalHanlder = () => {
    setShowBidHistoryModal(false);
  };
	return (
		<div className='pt-2 font-Shadeerah'>
			{
				sortWithAmount(bidList).slice(0, 3).map((bid: Bid, index: number) => {
					return 	(
							<div className='pt-2 pr-2 sm:lg:pr-8 xl:pr-10' key={index}>
								<OneHistory address={bid.sender} bidDate={BigNumber.from(bid.timestamp.toString())} bidAmount={bid.value} transactionHash={bid.transactionHash} />
							</div>
						)
				})
			}
			<div className='pt-10'>
				<button className='font-Shadeerah text-xl flex items-center' onClick={showBidModalHandler}>
					<span className='pr-4'>Bid History</span><FontAwesomeIcon icon={faHandPointRight} />
				</button>
			</div>
			{showBidHistoryModal && (
        <Modal
          show={showBidHistoryModal}
          onHide={dismissBidModalHanlder}
					contentClassName='history-modal'
					className='font-Shadeerah'
        >
          <Modal.Header closeButton >
            <Modal.Title className='font-brick text-2xl'>Gnar { gnarId }</Modal.Title>
						
          </Modal.Header>
					<div className='w-full flex justify-center'>
						<div className='w-2/3'>
							<Gnar gnarId={`${gnarId}`} />
						</div>
					</div>
          <Modal.Body>
					{
						sortWithAmount(bidList).map((bid: Bid, index: number) => {
							return 	(
									<div className='pt-2 pr-2' key={index}>
										<OneHistory address={bid.sender} bidDate={BigNumber.from(bid.timestamp.toString())} bidAmount={bid.value} transactionHash={bid.transactionHash} showDate />
									</div>
								)
						})
					}
          </Modal.Body>
        </Modal>
      )}
		</div>
		
	);
}
  
export default BidHistory;