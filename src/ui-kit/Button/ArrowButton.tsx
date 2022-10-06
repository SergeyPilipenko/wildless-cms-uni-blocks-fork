import { JSX } from '@redneckz/uni-jsx';
import { Img } from '../Img/Img';
import { Button } from './Button';
import type { ButtonProps } from './ButtonProps';

export const ArrowButton = JSX<ButtonProps>(({ className, disabled, ...rest }) => (
  <Button
    rounded
    className={`group shadow-[0_4px_25px_rgba(0,0,0,0.07)] w-12 h-12 min-h-12 max-h-12 flex items-center justify-center ${
      disabled
        ? 'bg-secondary-light text-secondary-text'
        : 'bg-white text-primary-text hover:text-primary-main'
    } ${className || ''}`}
    disabled={disabled}
    {...rest}
  >
    <Img
      className="w-4 h-4 min-w-4 min-h-4 rounded-full box-border"
      image={{ icon: 'ArrowLeftIcon', iconVersion: 'black' }}
      imageClassName="group-hover:text-primary-main"
      width="16"
      height="16"
      asSVG
    />
  </Button>
));
