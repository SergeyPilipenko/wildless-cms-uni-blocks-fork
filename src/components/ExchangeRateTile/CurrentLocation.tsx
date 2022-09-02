import { JSX } from '@redneckz/uni-jsx';
import { Img } from '../../ui-kit/Img/Img';

interface CurrentLocationProps {
  className?: string;
  address?: string;
  distance?: string;
}

export const CurrentLocation = JSX<CurrentLocationProps>(
  ({ className = '', address, distance }) => (
    <div className={`flex text-sm ${className}`}>
      <Img className="min-w-fit" image={{ icon: 'GpsIcon' }} width="24" height="24" asSVG />
      <div className="ml-3 font-light">
        {address ? <p className="m-0 mb-[3px]">{address}</p> : null}
        {distance ? (
          <p className="text-secondary-text m-0">Курс указан для ближайшего офиса - {distance}</p>
        ) : null}
      </div>
    </div>
  ),
);
