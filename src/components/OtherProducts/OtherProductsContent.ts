import type { ColorPalette } from '../../types';
import type { BlockDef, ColumnsCount } from '../../ui-kit/BlocksList/BlocksListProps';

/**
 * @title Элемент списка
 */
export interface BlockItemCommonProps {
  /**
   * @title Название
   * @default Список
   */
  label?: string;
  /**
   * @title Отображать в раскрытом виде
   */
  isExpanded?: boolean;
  /** @title Блоки */
  blocks?: BlockDef[];
  columns?: ColumnsCount;
}

/**
 * @title Другие продукты
 */
export interface OtherProductsContent {
  /** @title Заголовок */
  title?: string;
  /**
   * @title Список
   * @maxItems 10
   */
  blockItems?: BlockItemCommonProps[];
  colorPalette?: ColorPalette;
}
