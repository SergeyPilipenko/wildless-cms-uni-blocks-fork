import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import type { DescriptionContent } from '../../ui-kit/Description/DescriptionContent';
import type { HeadingContent } from '../../ui-kit/Heading/HeadingContent';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';

/**
 * @enumNames ["Черный", "Белый"]
 */
export type CatalogProductColor = 'black' | 'white';

export interface CatalogCardType extends HeadingContent, DescriptionContent, ImageContent {
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
export type CatalogContent = HeadingContent &
  DescriptionContent & {
    cards?: CatalogCardType[];
  };
