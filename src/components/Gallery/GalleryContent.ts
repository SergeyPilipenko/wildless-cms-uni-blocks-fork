import type { BlockVersion } from '../../model/BlockVersion';
import type { ListOrientation } from '../../model/ListOrientation';
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
  /**
   * @default
   * {
   *  format: "webp",
   *  size: {
   *    width: 140,
   *    height: 140
   *   }
   * }
   */
  image?: Picture;
  /** @title Кнопка */
  button?: ButtonWithIconProps;
  /**
   * @title Буллиты
   * @default true
   */
  isDotted?: boolean;
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
  /** @title Отображать элементы в моб. версии (прокрутка shift+mouseScroll) */
  orientation?: ListOrientation; //TODO: for mobile
}
