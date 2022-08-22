import type { ProductBlockInnerContent } from '../ProductBlock/ProductBlockContent';

/** @title Кнопка под слайдом */
interface ProductGalleryNav {
  /** @title Заголовок */
  title: string;
  /** @title Описание */
  desc: string;
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
 * @title Продуктовая галерея (для мобильных горизонтальная прокрутка shift+mouseScroll)
 */
export interface ProductGalleryContent {
  /**
   * @title Задержка
   * @hidden //! temporary not used
   */
  duration?: number;
  /** @title Слайды */
  slides?: ProductSlide[];
}
