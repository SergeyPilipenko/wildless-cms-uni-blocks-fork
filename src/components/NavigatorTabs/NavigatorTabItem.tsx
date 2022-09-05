import { JSX } from '@redneckz/uni-jsx';
import type { NavigatorTab } from './NavigatorTabsContent';

export interface NavigatorTabItemProps extends NavigatorTab {
  active?: boolean;
  className?: string;
  onClick?: (ev: MouseEvent) => void;
}

const TEXT_CLASSES = 'font-sans font-normal text-sm';
const LINK_CLASSES = 'flex-1 flex items-center justify-center cursor-pointer';

export const NavigatorTabItem = JSX<NavigatorTabItemProps>(
  ({ className = '', label, active, children, onClick, href, target = '_self' }) => (
    <a className={getLinkClasses(className, active)} target={target} href={href} onClick={onClick}>
      <span className={getTextClasses(active)}>{label || children}</span>
    </a>
  ),
);

const getLinkClasses = (className: string, active?: boolean) => {
  const classes = active ? 'bg-primary-main' : 'group bg-white';

  return `${classes} ${LINK_CLASSES} ${className}`;
};

const getTextClasses = (active?: boolean) => {
  const classes = active ? 'text-white' : 'text-secondary-text group-hover:text-primary-main ';

  return `${classes} ${TEXT_CLASSES}`;
};
