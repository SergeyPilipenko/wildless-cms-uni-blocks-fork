import type { IconName } from '../../icons/IconName';

export type { IconName };

/**
 * @title Цвет иконки (svg)
 * @enumNames ["Нет", "Основной", "Второстепенный"]
 */
export type IconColor = 'none' | 'primary' | 'secondary';

export interface IconProps {
  className?: string;
  name: IconName;
  alt?: string;
  title?: string;
  width?: string;
  height?: string;
  asSVG?: boolean;
  color?: IconColor;
}
