import { JSX } from '@redneckz/uni-jsx';
import type { BgColorVersion } from '../../model/BgColorVersion';
import type { LinkProps } from '../../model/LinkProps';

export interface TopItemContent extends LinkProps {
  active?: boolean;
}

export interface TopItemProps extends TopItemContent {
  className?: string;
  flat?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
  bgColor?: BgColorVersion;
  dataItemName?: string;
}

const TEXT_CLASSES = 'font-sans text-s-light';
const LINK_CLASSES = 'inline-block border border-solid bg-transparent text-center no-underline';

export const TopItem = JSX<TopItemProps>(
  ({
    className = '',
    text,
    href,
    target,
    active,
    flat,
    onClick,
    children,
    ariaLabel,
    bgColor = 'bg-white',
  }) => (
    <a
      className={`${getLinkClasses(bgColor, active, flat)} ${className}`}
      href={href}
      target={target}
      onClick={onClick}
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      <span className={getTextClasses(bgColor, active, flat)}>{text || children}</span>
    </a>
  ),
);

const getLinkClasses = (bgColor: BgColorVersion, active = false, flat = false) => {
  let classes = 'border-transparent';
  if (active) {
    classes = `rounded-md ${bgColor === 'bg-white' ? 'border-primary-main' : 'border-white'}`;
  }

  return `${classes} ${LINK_CLASSES} ${flat ? '' : 'px-4 py-2'}`;
};

const getTextClasses = (bgColor: BgColorVersion, active = false, flat = false) => {
  if (bgColor === 'transparent') {
    return `text-white hover:text-primary-hover ${TEXT_CLASSES}`;
  }
  const nonActiveAtoms = `${
    flat ? 'text-primary-text' : 'text-secondary-text'
  } hover:text-primary-main`;

  return `${active ? 'text-primary-main' : nonActiveAtoms} ${TEXT_CLASSES}`;
};
