import type { BlockVersion } from '../../model/BlockVersion';
import type { Picture } from '../../model/Picture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';

export interface GalleryItem {
  title?: string; //TODO: for mobile
  text?: string;
}

/**
 * @title Карточка
 */
export interface GalleryCard {
  /** @title Заголовок */
  title?: string;
  /** @title Описание */
  description?: string;
  image?: Picture;
  /** @title Кнопка */
  button?: ButtonWithIconProps;
  /** @title Список */
  items?: GalleryItem[];
  version?: BlockVersion;
}

/**
 * @title Галерея
 */
export interface GalleryContent {
  /** @title Заголовок */
  title?: string;
  /** @title Описание */
  description?: string;
  /**
   * @title Карточки
   * @minItems 4
   */
  cards?: GalleryCard[];
  isScroll?: boolean; //TODO: for mobile
}
