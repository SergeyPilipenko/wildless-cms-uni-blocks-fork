import type { EmptyOption } from '../../model/EmptyOptionType';
import type { DescriptionProps, LabelProps } from '../../model/HeadlineType';
import type { UniBlockProps } from '../../model/JSXBlock';
import type { ListOrientation } from '../../model/ListOrientation';
import type { Picture } from '../../model/Picture';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import type { HeadingProps } from '../../ui-kit/Heading/HeadingProps';
import type { TariffsTableInnerContent } from '../../ui-kit/InnerTable/InnerTableProps';
import type { ListProps } from '../../ui-kit/List/ListProps';

/**
 * @hidden
 */
export interface TariffsTableTile {
  header: TariffsTableRowHeader;
  data: CellDef[];
}

/**
 * @hidden
 */
export interface TariffsTableProps extends UniBlockProps {
  tiles: TariffsTableTile[];
}

/**
 * @hidden
 */
export interface TariffsTableCellIndexProps {
  rowIdx: number;
  cellIdx: number;
  fieldIdx: number;
}

/**
 * @hidden
 */
export type Data = {
  header: TariffsTableRowHeader;
  data: CellDef[][];
};

/**
 * @title Параметр
 */
export type TariffsTableRowHeader = HeadingProps & {
  /** @default { "format": "webp", "size": { "width": 24, "height": 24 } } */
  icon?: Picture;
};

/**
 * @title Изображение
 */
export type ImageCellDef = {
  /** @default Img */
  tableCellType: 'Img';
  /** @default { "format": "webp", "size": { "width": 24, "height": 24 } } */
  image?: Picture;
};

/**
 * @title Кнопки
 */
export type ButtonsCellDef = ButtonContent & {
  /** @default Buttons */
  tableCellType: 'Buttons';
};

/**
 * @title Заголовок и описание
 */
export type LabelDescriptionCell = LabelProps & DescriptionProps;

/**
 * @title Заголовок и описание
 */
export type LabelDescriptionCellDef = LabelDescriptionCell & {
  /** @default LabelDescription */
  tableCellType: 'LabelDescription';
};

/**
 * @title Список
 */
export type ListBlockDef = Omit<ListProps, 'listItemSize' | 'version'> & {
  /** @default List */
  tableCellType: 'List';
};

/**
 * @title Таблица
 */
export type InnerTableBlockDef = TariffsTableInnerContent & {
  /** @default Table */
  tableCellType: 'Table';
};

/**
 * @title Содержимое ячейки
 */
export type CellDef =
  | EmptyOption
  | ImageCellDef
  | ButtonsCellDef
  | LabelDescriptionCellDef
  | ListBlockDef
  | InnerTableBlockDef;

/**
 * @title Колонка
 */
export interface TariffsTableColumn {
  /** @title Данные */
  data?: CellDef[][];
}

/**
 * @title Таблица тарифов
 */
export type TariffsTableContent = HeadingProps &
  DescriptionProps & {
    /** @title Колонки */
    tariffsColumns?: TariffsTableColumn[];
    /** @title Параметры */
    rowHeaders?: TariffsTableRowHeader[];
    /** @title Отображать элементы в моб. версии (прокрутка shift+mouseScroll) */
    orientation?: ListOrientation;
    /** @title Скрывать строк */
    hiddenRowsNum?: number;
  };
