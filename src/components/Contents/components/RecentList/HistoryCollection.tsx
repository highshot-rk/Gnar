import { BigNumber, BigNumberish } from 'ethers';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from '../../../utils/Loading';
import { Link } from 'react-router-dom';
import Gnar from '../Gnar';

interface HistoryCollectionProps {
  historyCount: number;
  latestGnarId: BigNumberish;
}

const HistoryCollection: React.FC<HistoryCollectionProps> = (props: HistoryCollectionProps) => {
  const { historyCount, latestGnarId } = props;

  if (!latestGnarId) return null;

  const startAtZero = BigNumber.from(latestGnarId).sub(historyCount).lt(0);

  let gnarIds: Array<BigNumber | null> = new Array(historyCount);
  gnarIds = gnarIds.fill(null).map((_, i) => {
    if (BigNumber.from(i).lt(latestGnarId)) {
      const index = startAtZero
        ? BigNumber.from(0)
        : BigNumber.from(Number(latestGnarId) - historyCount);
      return index.add(i);
    } else {
      return null;
    }
  });

  const gnarContent = gnarIds.map((gnarId, i) => {
    return !gnarId ? <Loading /> : (<div key={i} className='pl-2 hover:opacity-75'><Link to={`/gnar/${gnarId}`}><Gnar gnarId={`${gnarId}`} /></Link></div>);
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4
  };

  return (
    <div>
      <Slider {...settings}>{ gnarContent }</Slider>
    </div>
  );
};

export default HistoryCollection;
