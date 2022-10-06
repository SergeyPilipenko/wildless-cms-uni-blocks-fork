import type { ButtonVersion } from '../../model/ButtonVersion';
import type { LinkProps } from '../../model/LinkProps';
import type { Picture } from '../../model/Picture';
import type { VNode } from '../../model/VNode';

/**
 * @hidden
 */
export interface ButtonAdditionalProps {
  className?: string;
  disabled?: boolean;
  rel?: string;
  ariaLabel?: string;
  onClick?: (ev?: { preventDefault: () => void }) => void;
}

/**
 * @title Кнопка
 */
export interface ButtonProps extends ButtonAdditionalProps, LinkProps {
  /**
   * @title Текст
   * @default Кнопка
   */
  text?: string;
  version?: ButtonVersion;
}

export interface ButtonWithIconProps extends ButtonProps {
  /** @title Иконка слева */
  icon?: Picture;
  /** @title Иконка справа */
  iconRight?: Picture;
  /** @title Верхний текст */
  aboveText?: string;
  /** @hidden */
  appendLeft?: VNode;
  /** @hidden */
  appendRight?: VNode;
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

export interface BackwardButtonProps extends ButtonProps {
  /** @title Иконка */
  icon?: Picture;
  /** @title Верхний текст */
  aboveText?: string;
  /** @hidden */
  appendLeft?: VNode;
  /** @title Закругленные углы */
  rounded?: boolean;
  /** @hidden */
  asSVG?: boolean;
}
