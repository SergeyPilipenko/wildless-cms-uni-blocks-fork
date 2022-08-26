import type { BlockDef, ColumnsCount } from '../../ui-kit/BlocksList/BlocksListProps';

/**
 * @title Элемент списка
 */
export interface blockItemCommonProps {
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
  /**
   * @title Отображать/скрывать обводку элемента
   * @default false
   */
  bordered?: boolean; // TODO: только для мобильной версии
  columns?: ColumnsCount;
}

/**
 * @title Другие продукты
 */
export interface OtherProductsContent {
  /** @title Заголовок */
  title?: string;
  /** @title Список */
  blockItems?: blockItemCommonProps[];
  /** @title Подзаголовок */
  description?: string; // TODO: только для мобильной версии
  /**
   * @title Отображать/скрывать обводку у элемента списка
   * @default false
   */
  bordered?: boolean; // TODO: только для мобильной версии
}
