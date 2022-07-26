import type { BaseTileCommonProps } from '../BaseTile/BaseTileProps';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

/**
 * @title Продуктовая плитка
 */
export interface ProductTileContent extends Omit<BaseTileCommonProps, 'align'> {
  /**
   * @title Преимущества
   * @maxItems 7
   */
  benefits?: Omit<Benefit, 'icon'>[];
}
