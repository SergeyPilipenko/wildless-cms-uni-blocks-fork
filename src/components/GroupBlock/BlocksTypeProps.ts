import { ContentPageContext } from '../../components/ContentPage/ContentPageContext';
import type { ProductBlockContent } from '../../components/ProductBlock/ProductBlockContent';
import type { ProductTileContent } from '../../components/ProductTile/ProductTileContent';
import type { EmptyOption } from '../../model/EmptyOptionType';

export interface ActiveHandler {
  context: ContentPageContext;
  blocks?: GroupBlockDef[];
  initialState?: boolean;
}

export interface GroupBlockCommonProps {
  /**
   * @title Стиль
   * @default ["col-span-12"]
   */
  style?: string[];
  /** @title Теги */
  tags?: string[];
}

/**
 * @title Продуктовый блок
 * @default {"blockType": "ProductBlock"}
 */
export type ProductBlockDef = ProductBlockContent &
  GroupBlockCommonProps & { blockType: 'ProductBlock' };

/**
 * @title Продуктовая плитка
 * @default {"blockType": "ProductTile"}
 */
export type ProductTileDef = ProductTileContent &
  GroupBlockCommonProps & { blockType: 'ProductTile' };

/**
 * @title Содержимое блока
 */
export type GroupBlockDef = EmptyOption | ProductBlockDef | ProductTileDef;
