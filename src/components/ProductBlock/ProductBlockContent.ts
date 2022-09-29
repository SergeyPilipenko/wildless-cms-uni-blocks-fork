import type { BlockVersion } from '../../model/BlockVersion';
import type { IconVersion } from '../../model/IconVersion';
import type { LinkProps } from '../../model/LinkProps';
import { Picture } from '../../model/Picture';
import type { BackwardButtonProps, ButtonContent } from '../../ui-kit/Button/ButtonProps';
import type { DescriptionContent } from '../../ui-kit/Description/DescriptionContent';
import type { HeadingContent, HeadingTypeContent } from '../../ui-kit/Heading/HeadingContent';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { ListContent } from '../../ui-kit/List/ListContent';

export interface ProductBlockBenefit {
  icon?: Picture;
  /** @title Название */
  label?: string;
  /** @title Описание */
  description?: string;
}

export type BenefitItemProps = {
  benefit: ProductBlockBenefit;
  version?: BlockVersion;
  benefitsVersion?: IconVersion;
};

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
    benefits?: ProductBlockBenefit[];
    benefitsVersion?: IconVersion;
    version?: BlockVersion;
    /**
     *  @title Буллиты
     *  @default true
     */
    isDotted?: boolean;
    /** @title Лейбл (моб.) */
    label?: string;
    /**
     * @title Стиль для текстовой части
     * @hidden
     */
    textBlockClassName?: string;
  };

/**
 * @title Продуктовый блок
 */
export interface ProductBlockContent extends ProductBlockInnerContent {
  /** @title Хлебные крошки */
  breadcrumbs?: LinkProps[];
  /** @title Кнопка возврата */
  backwardButton?: BackwardButtonProps;
}
