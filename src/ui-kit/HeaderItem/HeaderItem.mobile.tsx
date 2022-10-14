import { JSX } from '@redneckz/uni-jsx';
import type { BgColorVersion } from '../../model/BgColorVersion';
import type { TopItemProps } from '../TopItem/TopItem';

export type HeaderItemProps = TopItemProps;

const TEXT_CLASSES = 'font-sans text-s';
const BORDER_CLASSES = 'absolute left-0 -bottom-3 w-full h-[2px]';

export const HeaderItem = JSX<HeaderItemProps>(
  ({ className = '', text, href, target, active, onClick, children, bgColor = 'bg-white' }) => {
    return (
      <a
        className={`relative inline-block bg-transparent text-center no-underline ${className}`}
        href={href}
        target={target}
        onClick={onClick}
      >
        <span className={getTextClasses(bgColor, active)}>{text || children}</span>
        {active ? <div className={getBorderClasses(bgColor, active)} /> : null}
      </a>
    );
  },
);

const getTextClasses = (bgColor: BgColorVersion, active = false) => {
  let classes = 'text-white';
  if (bgColor === 'bg-white') {
    classes = active ? 'text-primary-main' : 'text-secondary-text hover:text-primary-main';
  }

  return `${classes} ${TEXT_CLASSES}`;
};

const getBorderClasses = (bgColor: BgColorVersion, active = false) => {
  if (!active) {
    return BORDER_CLASSES;
  }

  return `${bgColor === 'bg-white' ? 'bg-primary-main' : bgColor} ${BORDER_CLASSES}`;
};
