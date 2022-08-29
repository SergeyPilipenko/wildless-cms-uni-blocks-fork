import type { LinkProps } from '../../model/LinkProps';
import type { Picture } from '../../model/Picture';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import type { ListOrientation } from '../../model/ListOrientation';

/**
 * @hidden
 */
export type Row = {
  header: RowHeader;
  data: CellData[][];
};

/**
 * @title Ячейка
 */
export interface CellData {
  /** @title Заголовок */
  label?: string;
  /** @title Описание */
  description?: string;
}

/**
 * @title Шапка колонки
 */
export interface ColumnHeader {
  /** @title Заголовок */
  title?: string;
  /** @title Подзаголовок */
  subtitle?: string;
  icon?: IconName;
  image?: Picture;
  link?: LinkProps;
}

/**
 * @title Продукт
 */
export interface Column {
  header?: ColumnHeader;
  /** @title Данные */
  data?: CellData[][];
}

/**
 * @title Параметр
 */
export interface RowHeader {
  /** @title Заголовок */
  title?: string;
}

/**
 * @title Ячейка
 */
export interface TableColumnData {
  rowHeader?: string;
  cell: CellData[];
}

/**
 * @title Параметр
 */
export interface TableColumnHeader {
  /** @title Заголовок */
  title?: string;
  icon?: IconName;
}

/**
 * @title Сравнительная таблица
 */
export interface ComparisonTableContent {
  /** @title Заголовок */
  title?: string;
  /** @title Параметры */
  rowHeaders?: RowHeader[];
  /** @title Продукты */
  columns?: Column[];
  /** @title Закрасить первую колонку */
  isColoredFirstColumn?: boolean;
  /** @title Отображать заданное количество строк */
  visibleRowLength?: number;
  /** @title Отображать элементы в моб. версии (прокрутка shift+mouseScroll) */
  orientation?: ListOrientation; // TODO: мобильный проп
}
