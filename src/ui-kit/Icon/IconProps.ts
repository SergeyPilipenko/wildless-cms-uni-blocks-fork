import type { IconName } from '../../icons/IconName';

export type { IconName };

/**
 * @title Цвет иконки (svg)
 * @enumNames ["Нет", "Основной", "Второстепенный"]
 */
export type IconColor = 'none' | 'primary' | 'secondary';

export interface IconCompatibilityFields {
  /** @title Альтернативный текст (alt) */
  alt?: string;
  /** @title Текст подсказки (title) */
  title?: string;
  /** @title Ширина */
  width?: string;
  /** @title Высота */
  height?: string;
  /** @hidden */
  asSVG?: boolean;
  /** @hidden */
  color?: IconColor;
}

export type IconProps = IconCompatibilityFields & {
  className?: string;
  name?: IconName;
};
