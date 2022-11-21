import type { ListContent } from '../../ui-kit/List/ListContent';

/**
 * @title Цвет
 * @enumNames ["Оранжевый", "Светло-зеленый", "Зеленый", "Тёмно-зеленый"]
 */
export type InvestmentCellColor = 'yellow' | 'green-light' | 'green' | 'green-dark';

/**
 * @title Высота
 */
export type InvestmentCellSize = 'XL' | 'L' | 'M' | 'S' | 'XS';

/**
 * @title Ячейка
 */
export type InvestmentCell = {
  /** @title Текст */
  text?: string;
  cellColor?: InvestmentCellColor;
  cellSize?: InvestmentCellSize;
};

/**
 * @title Элемент данных 1
 */
export type InvestmentZeroColumn = {
  /** @title Название */
  title?: string;
  /** @hidden */
  cells?: InvestmentCell[];
};

/**
 * @title Элемент данных
 */
export type InvestmentColumn = {
  /** @title Название */
  title?: string;
  /** @title Ячейки */
  cells?: InvestmentCell[];
};

/**
 * @title Блок инвестиций
 */
export type InvestmentInfoContent = ListContent & {
  /** @title Буллиты */
  isDotted?: boolean;
  /** @title Элемент данных 1 */
  investmentZeroColumn?: InvestmentZeroColumn;
  /** @title Остальные элементы данных */
  investmentColumns?: InvestmentColumn[];
};
