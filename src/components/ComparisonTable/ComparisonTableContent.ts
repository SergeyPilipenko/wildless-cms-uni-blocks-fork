import type { LinkProps } from '../../model/LinkProps';
import type { ListOrientation } from '../../model/ListOrientation';
import type { Picture } from '../../model/Picture';
import type { DescriptionProps, LabelProps, TitleProps } from '../../model/HeadlineType';

/**
 * @title Ячейка
 */
export type CellData = LabelProps & DescriptionProps;

/**
 * @title Шапка колонки
 */
export type ColumnHeader = TitleProps & {
  /** @title Подзаголовок */
  subtitle?: string;
  /** @default { "format": "webp", "size": { "width": 24 } } */
  icon?: Picture;
  /** @default { "format": "webp", "size": { "width": 100 } } */
  image?: Picture;
  link?: LinkProps;
};

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
 * @title Сравнительная таблица
 */
export type ComparisonTableContent = TitleProps & {
  /** @title Параметры */
  rowHeaders?: TitleProps[];
  /** @title Продукты */
  columns?: Column[];
  /** @title Закрасить первую колонку */
  isColoredFirstColumn?: boolean;
  /** @title Отображать заданное количество строк */
  visibleRowLength?: number;
  /** @title Отображать элементы в моб. версии (прокрутка shift+mouseScroll) */
  orientation?: ListOrientation; // TODO: мобильный проп
};
