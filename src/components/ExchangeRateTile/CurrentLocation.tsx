import { JSX } from '@redneckz/uni-jsx';
import { Img } from '../../ui-kit/Img/Img';

interface CurrentLocationProps {
  className?: string;
  address?: string;
}

export const CurrentLocation = JSX<CurrentLocationProps>(({ className = '', address }) => (
  <div className={`flex ${className}`}>
    <Img image={{ icon: 'GpsIcon' }} width="24" height="24" asSVG />
    <div className="ml-3">
      {address ? <p className="text-primary-main  m-0 mb-1 text-l">{address}</p> : null}
      <p className="text-secondary-text m-0 text-m">Курс указан для ближайшего офиса</p>
    </div>
  </div>
));
