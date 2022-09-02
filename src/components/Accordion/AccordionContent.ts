import type { BlockDef } from '../../ui-kit/BlocksList/BlocksListProps';
import type { BlockVersion } from '../../model/BlockVersion';
import type { Picture } from '../../model/Picture';
/**
 * @title Элемент списка
 */
export interface AccordionItemCommonProps {
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
  labelIcon?: Picture; // TODO: только для мобильной версии
}

/**
 * @title Аккордеон
 */
export interface AccordionContent {
  /** @title Заголовок */
  title?: string;
  version?: BlockVersion;
  /** @title Список */
  accordionItems?: AccordionItemCommonProps[];
  /** @title Описание */
  description?: string;
  /**
   * @title Отображать/скрывать обводку у элемента списка
   * @default false
   */
  bordered?: boolean; // TODO: только для мобильной версии
}
