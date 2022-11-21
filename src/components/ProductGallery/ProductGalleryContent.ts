import type { BlockVersion } from '../../model/BlockVersion';
import type { ProductBlockInnerContent } from '../ProductBlock/ProductBlockContent';

/** @title Кнопка под слайдом */
export interface ProductGalleryNav {
  title: string;
  /** @title Описание */
  description: string;
}

/**
 * @title Слайд
 */
export interface ProductSlide {
  /** @title Превью содержимого слайда на навигации */
  nav?: ProductGalleryNav;
  /** @title Содержимое слайда */
  productBlock: ProductBlockInnerContent;
}

/**
 * @title Продуктовая галерея
 */
export interface ProductGalleryContent {
  /**
   * @title Слайды
   * @minItems 2
   */
  slides?: ProductSlide[];
  version?: BlockVersion;
}
