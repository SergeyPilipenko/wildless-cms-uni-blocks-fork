import type { BlockVersion } from '../../model/BlockVersion';
import type { Picture } from '../../model/Picture';
import type { BaseTileIconButton } from '../BaseTile/BaseTileProps';

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
  button?: BaseTileIconButton;
  /** @title Список */
  items?: string[];
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
}
