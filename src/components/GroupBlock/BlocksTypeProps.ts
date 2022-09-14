import type { ProductBlockContent } from '../../components/ProductBlock/ProductBlockContent';
import type { ProductTileContent } from '../../components/ProductTile/ProductTileContent';
import { ContentPageContext } from '../../components/ContentPage/ContentPageContext';

export interface ActiveHandler {
  context: ContentPageContext;
  blocks?: GroupBlockDef[];
  initialState?: boolean;
}

export interface GroupBlockCommonProps {
  /** @title Стиль */
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
 * @title Выберите блок
 */
export type EmptyOption = null;

/**
 * @title Содержимое блока
 */
export type GroupBlockDef = EmptyOption | ProductBlockDef | ProductTileDef;
