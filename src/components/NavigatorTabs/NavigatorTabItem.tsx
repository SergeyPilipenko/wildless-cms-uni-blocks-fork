import { JSX } from '@redneckz/uni-jsx';
import type { LinkProps } from '../../model/LinkProps';

export interface NavigatorTabItemProps extends LinkProps {
  active?: boolean;
  className?: string;
  onClick?: () => void;
}

const TEXT_CLASSES = 'font-sans text-m';
const LINK_CLASSES = 'flex-1 flex items-center justify-center cursor-pointer';

export const NavigatorTabItem = JSX<NavigatorTabItemProps>(
  ({ className = '', text, active, onClick, href, target = '_self', children }) => (
    <a className={getLinkClasses(className, active)} target={target} href={href} onClick={onClick}>
      <span className={getTextClasses(active)}>{text || children}</span>
    </a>
  ),
);

const getLinkClasses = (className: string, active = false) => {
  const classes = active ? 'bg-primary-main' : 'group bg-white';

  return `${classes} ${LINK_CLASSES} ${className}`;
};

const getTextClasses = (active = false) => {
  const classes = active ? 'text-white' : 'text-secondary-text group-hover:text-primary-main ';

  return `${classes} ${TEXT_CLASSES}`;
};
