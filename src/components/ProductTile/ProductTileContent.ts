import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';
import type { TileContent } from '../Tile/TileContent';

/**
 * @title Продуктовая плитка
 */
export interface ProductTileContent extends TileContent {
  /**
   * @title Преимущества
   * @maxItems 7
   */
  benefits?: Omit<Benefit, 'icon'>[];
}
