import type { ColorPalette } from '../../types';
import type { BlockDef } from '../../ui-kit/BlocksList/BlocksListProps';
import type { TitleProps } from '../../model/HeadlineType';

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
export type OtherProductsContent = TitleProps & {
  /** @title Список */
  blockItems?: BlockItemCommonProps[];
  colorPalette?: ColorPalette;
};
