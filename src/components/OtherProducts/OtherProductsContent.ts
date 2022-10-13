import type { ColorPalette } from '../../types';
import type { BlockDef } from '../../ui-kit/BlocksList/BlocksListProps';

/**
 * @title Элемент списка
 */
export interface BlockItemCommonProps {
  /**
   * @title Название
   * @default Список
   */
  label?: string;
  /** @title Отображать в раскрытом виде */
  isUnfolded?: boolean;
  /** @title Блоки */
  blocks?: BlockDef[];
}

/**
 * @title Другие продукты
 */
export interface OtherProductsContent {
  /** @title Заголовок */
  title?: string;
  /** @title Список */
  blockItems?: BlockItemCommonProps[];
  colorPalette?: ColorPalette;
}
