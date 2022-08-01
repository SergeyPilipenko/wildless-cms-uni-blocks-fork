import type { IconName } from '../../icons/IconName';

export type { IconName };

export interface IconProps {
  className?: string;
  name: IconName;
  alt?: string;
  title?: string;
  width?: string;
  height?: string;
  asSVG?: boolean;
}
