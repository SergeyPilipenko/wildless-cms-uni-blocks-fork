import type { HeadlineCommonProps } from '../../model/HeadlineType';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';

/**
 * @enumNames ["Черный", "Белый"]
 */
export type CatalogProductColor = 'black' | 'white';

export interface CatalogCardType extends HeadlineCommonProps, ImageContent {
  /** @title Цена в рублях */
  price?: number;
  /** @title Доступные цвета */
  colors?: CatalogProductColor[];
  /**
   * @title Кнопка
   * @default {
   *  "icon": { "format": "webp", "size": { "width": 24, "height": 24 } },
   *  "iconRight" : { "format": "webp", "size": { "width": 24, "height": 24 } }
   * }
   */
  button?: ButtonWithIconProps;
}

/**
 * @title Каталог
 */
export type CatalogContent = HeadlineCommonProps & {
  /** @title Список карточек */
  cards?: CatalogCardType[];
};
