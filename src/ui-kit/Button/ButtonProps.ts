import type { ButtonVersion } from '../../model/ButtonVersion';
import type { LinkProps } from '../../model/LinkProps';
import type { IconName } from '../Icon/IconProps';

/**
 * @hidden
 */
export interface ButtonAdditionalProps {
  className?: string;
  disabled?: boolean;
  rel?: string;
  ariaLabel?: string;
  onClick?: (ev: MouseEvent) => any;
}

export interface ButtonProps extends ButtonAdditionalProps, LinkProps {
  /**
   * @title Текст
   * @default Кнопка
   */
  text?: string;
  version?: ButtonVersion;
}

export interface ButtonWithIconProps extends ButtonProps {
  /** @title Иконка */
  icon?: IconName;
  /** @title Верхний текст */
  aboveText?: string;
  /** @hidden */
  appendLeft?: any;
  /** @title Закругленные углы */
  rounded?: boolean;
  /** @hidden */
  asSVG?: boolean;
}

export interface ButtonContent {
  /**
   * @title Кнопки
   * @maxItems 4
   */
  buttons?: ButtonWithIconProps[];
}
