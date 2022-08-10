import { JSX } from '@redneckz/uni-jsx';
import { Icon } from '../../ui-kit/Icon/Icon';

interface CurrentLocationProps {
  className?: string;
  address?: string;
  distance?: string;
}

export const CurrentLocation = JSX<CurrentLocationProps>(({ className, address, distance }) => (
  <div className={`flex ${className}`}>
    <Icon className="min-w-fit" name="GpsIcon" width="24" height="24" asSVG />
    <div className="ml-1.5">
      {address ? <p>{address}</p> : null}
      {distance ? (
        <p className="text-secondary-text">Курс указан для ближайшего офиса - {distance}</p>
      ) : null}
    </div>
  </div>
));
