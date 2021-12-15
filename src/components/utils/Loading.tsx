import loading_image from '../../assets/images/loading.gif';
import Image from 'react-bootstrap/Image';

export const Loading = () => {
  return (
    <div>
      <Image src={loading_image} alt={'loading gnar'} fluid />
    </div>
  );
};
export default Loading;
