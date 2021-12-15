import { BigNumber as EthersBN } from 'ethers';
import { IGnarSeed } from '../../../utils/assets/types';
import { getGnarData, ImageData as data } from '../../../utils/assets';
import { buildSVG } from '../../../utils/sdk/svg-builder';

const getGnar = (gnarId: string | EthersBN, seed: IGnarSeed) => {
  const id = gnarId.toString();
  const name = `Gnar ${id}`;
  const description = `Gnar ${id} is a member of the Gnars DAO`;
  const { parts, background } = getGnarData(seed);
  const image = `data:image/svg+xml;base64,${btoa(buildSVG(parts, data.palette, background))}`;

  return {
    name,
    description,
    image,
  };
};

function Gnar({gnarId}: {gnarId: string}) {
	/** this is template data.
	 * seedFromContract data will be come from smart contract based on gnarID
	 * const seedFromContract = await getGnarSeed(gnarId);
	 */
	const seedFromContract = {
		background: 0,
		body: Math.ceil(Math.random() * 12),
		accessory: Math.ceil(Math.random() * 95),
		head: Math.ceil(Math.random() * 88),
		glasses: Math.ceil(Math.random() * 13),
	};
	/////////////////// end template data ///////////////	
	const gnar = seedFromContract && getGnar(gnarId, seedFromContract);
	return (
		<div>
      <img src={gnar.image} alt={'loading noun'} className='w-screen' />
		</div>
	);
}
  
export default Gnar;