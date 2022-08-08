import type { IconName } from '../../icons/IconName';
import type { Picture } from '../../model/Picture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import type { CellData, RowHeader } from '../ComparisonTable/ComparisonTableContent';

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
export interface TariffsTableList {
  /** @title Маркеры */
  isDotted?: boolean;
  /** @title Элементы списка */
  items?: string[];
}

/**
 * @title Ячейка
 */
export interface TariffsTableCellData extends CellData {
  list?: TariffsTableList;
  image?: Picture;
  /** @title Кнопки */
  buttons?: ButtonWithIconProps[];
}

/**
 * @title Параметр
 */
export interface TariffsTableRowHeader extends RowHeader {
  icon?: IconName;
}

/**
 * @title Таблица тарифов
 */
export interface TariffsTableContent {
  /** @title Заголовок */
  title?: string;
  /** @title Колонки */
  columns?: TariffsTableColumn[];
  /** @title Параметры */
  rowHeaders?: TariffsTableRowHeader[];
}
