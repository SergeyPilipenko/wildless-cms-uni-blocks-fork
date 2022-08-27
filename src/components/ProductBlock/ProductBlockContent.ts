import type { BlockVersion } from '../../model/BlockVersion';
import type { LinkProps } from '../../model/LinkProps';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import type { DescriptionContent } from '../../ui-kit/Description/DescriptionContent';
import type { HeadingContent, HeadingTypeContent } from '../../ui-kit/Heading/HeadingContent';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { ListContent } from '../../ui-kit/List/ListContent';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

export type ProductBlockInnerContent = HeadingContent &
  HeadingTypeContent &
  DescriptionContent &
  ListContent &
  ButtonContent &
  ImageContent & {
    /**
     * @title Преимущества
     * @minItems 2
     * @maxItems 3
     */
    benefits?: Benefit[];
    version?: BlockVersion;
    /** @title Буллиты */
    isDotted?: boolean;
    /** @title Лейбл (моб.) */
    label?: string;
    /**
     * @title Стиль для текстовой части
     * @hidden
     */
    textBlockClassName?: string;
    /** @title Фоновый текст под иллюстрацией */
    backgroundText?: string;
  };

/**
 * @title Продуктовый блок
 */
export interface ProductBlockContent extends ProductBlockInnerContent {
  /** @title Хлебные крошки */
  breadcrumbs?: LinkProps[];
}
