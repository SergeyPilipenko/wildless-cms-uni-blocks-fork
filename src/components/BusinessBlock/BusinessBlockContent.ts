import type { IconProps, Picture } from '../../model/Picture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';

export type BusinessCardItemProps = IconProps & {
  /** @title Текст */
  text?: string;
};

export interface BusinessCardProps {
  /** @title Заголовок карточки */
  title?: string;
  image?: Picture;
  /** @title Список */
  cardItems?: BusinessCardItemProps[];
  /** @title Кнопка */
  button?: ButtonWithIconProps;
}

/**
 * @title Бизнес блок
 */
export interface BusinessBlockContent {
  /** @title Заголовок блока */
  title?: string;
  /**
   * @title Карточки
   * @minItems 2
   * @maxItems 2
   */
  cards?: BusinessCardProps[];
}
