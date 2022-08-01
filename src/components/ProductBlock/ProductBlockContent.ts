import type { LinkProps } from '../../model/LinkProps';
import { HeadingType } from '../../ui-kit/Heading/HeadingProps';
import type { BaseTileCommonProps } from '../BaseTile/BaseTileProps';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

export interface ProductBlockInnerCommonProps
  extends Omit<BaseTileCommonProps, 'align' | 'titleSize'> {
  /**
   * @title Размер заголовка
   * @hidden
   */
  headingType?: HeadingType;
  /**
   * @title Преимущества
   * @minItems 2
   * @maxItems 3
   */
  benefits?: Benefit[];
}

/**
 * @title Продуктовый блок
 */
export interface ProductBlockContent extends ProductBlockInnerCommonProps {
  /** @title Хлебные крошки */
  breadcrumbs?: LinkProps[];
}
