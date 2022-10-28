import type { GalleryCardProps, GalleryContent } from '../Gallery/GalleryContent';

/**
 * @title Мини-галерея
 */
export interface MiniGalleryContent extends GalleryContent {
  /**
   * @title Карточки
   * @minItems 4
   */
  cards?: GalleryCardProps[];
}
