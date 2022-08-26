import type { BlockVersion } from '../../model/BlockVersion';
import type { Picture } from '../../model/Picture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';

/**
 * @title Элемент списка
 */
export interface GalleryItem {
  /** @title Заголовок (моб.) */
  title?: string; //TODO: for mobile
  /** @title Текст */
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
   * @minItems 3
   */
  cards?: GalleryCard[];
  /** @title Горизонтальная прокрутка (для мобильных прокрутка shift+mouseScroll) */
  isScroll?: boolean; //TODO: for mobile
}
