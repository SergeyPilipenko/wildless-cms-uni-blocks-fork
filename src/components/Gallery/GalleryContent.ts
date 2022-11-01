import type { BlockVersion } from '../../model/BlockVersion';
import type { ListOrientation } from '../../model/ListOrientation';
import type { Picture } from '../../model/Picture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import type { HeadlineCommonProps } from '../../model/HeadlineType';

/**
 * @title Элемент списка
 */
export interface GalleryItemProps {
  /** @title Заголовок (моб.) */
  title?: string; //TODO: for mobile
  /** @title Текст */
  text?: string;
}

/**
 * @title Карточка
 */
export type GalleryCardProps = HeadlineCommonProps & {
  /**
   * @default {
   *   "format": "webp",
   *   "size": {
   *       "width": 140
   *   },
   *   "sources": [{
   *       "media": 1279,
   *       "width": 84,
   *       "format": "webp",
   *       "alignment": "center"
   *   }]
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
  items?: GalleryItemProps[];
  version?: BlockVersion;
};

/**
 * @title Галерея
 */
export type GalleryContent = HeadlineCommonProps & {
  /**
   * @title Карточки
   * @minItems 3
   */
  cards?: GalleryCardProps[];
  /** @title Отображать элементы в моб. версии (прокрутка shift+mouseScroll) */
  orientation?: ListOrientation; //TODO: for mobile
};
