import type { Picture } from '../../model/Picture';

/**
 * @title Элемент аккордиона
 */
export interface AccordionItemContent {
  /**
   * @title Название
   * @default Список
   */
  label?: string;
  /** @title Отображать в раскрытом виде */
  isExpanded?: boolean;
  labelIcon?: Picture; // TODO: только для мобильной версии
}
