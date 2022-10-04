import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { HeadlineCommonProps } from '../../model/HeadlineType';

/**
 * @enumNames ["Черный", "Белый"]
 */
export type CatalogProductColor = 'black' | 'white';

export interface CatalogCardType extends HeadlineCommonProps, ImageContent {
  /** @title Цена в рублях */
  price?: number;
  /** @title Доступные цвета */
  colors?: CatalogProductColor[];
  /** @title Кнопка */
  button?: ButtonWithIconProps;
}

/**
 * @title Каталог
 */
export type CatalogContent = HeadlineCommonProps & {
  /** @title Список карточек */
  cards?: CatalogCardType[];
};
