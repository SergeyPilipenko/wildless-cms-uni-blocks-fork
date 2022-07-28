import { JSX } from '@redneckz/uni-jsx';
import type { TopItemProps } from '../TopItem/TopItem';
import { Icon } from '../Icon/Icon';
import { IconName } from '../Icon/IconProps';

export interface IconItemProps extends TopItemProps {
  /** @title Название иконки */
  icon?: IconName;
}

export const IconItem = JSX<IconItemProps>(({ className, icon, text, href }) => {
  return (
    <a href={href} className={`flex text-sm mb-4 ${className || ''}`}>
      {icon ? <Icon className="pr-1" name={icon} width="24" height="24" asSVG /> : null}
      <span className="pl-0.5 font-medium">{text}</span>
    </a>
  );
});
