import type { IconName } from '../../icons/IconName';
import type { CellData } from '../ComparisonTable/ComparisonTableContent';
import type { ListOrientation } from '../../model/ListOrientation';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import type { ListContent } from '../../ui-kit/List/ListContent';
import type { HeadingContent } from '../../ui-kit/Heading/HeadingContent';
import type { DescriptionContent } from '../../ui-kit/Description/DescriptionContent';

/**
 * @title Ряд
 */
export type TariffsTableRowData = {
  header: TariffsTableRowHeader;
  data: TariffsTableCellData[][];
};

/**
 * @title Колонка
 */
export interface TariffsTableColumn {
  /** @title Данные */
  data?: TariffsTableCellData[][];
}

/**
 * @title Список
 */
export type TariffsTableList = ListContent & {
  /** @title Маркеры */
  isDotted?: boolean;
};

/**
 * @title Ячейка
 */
export type TariffsTableCellData = CellData &
  ImageContent &
  ButtonContent & {
    list?: TariffsTableList;
  };

/**
 * @title Параметр
 */
export type TariffsTableRowHeader = HeadingContent & {
  icon?: IconName;
};

/**
 * @title Таблица тарифов
 */
export type TariffsTableContent = HeadingContent &
  DescriptionContent & {
    /** @title Колонки */
    columns?: TariffsTableColumn[];
    /** @title Параметры */
    rowHeaders?: TariffsTableRowHeader[];
    /** @title Отображать элементы в моб. версии (прокрутка shift+mouseScroll) */
    orientation?: ListOrientation;
  };

/** @hidden */
export type TariffsTableTileCellProps = {
  header: TariffsTableRowHeader;
  data: TariffsTableCellData[];
};
