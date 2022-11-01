import type { AlignType } from '../../model/AlignType';
import type { BlockVersion } from '../../model/BlockVersion';
import type { Picture } from '../../model/Picture';
import type { BlockDef } from '../../ui-kit/BlocksList/BlocksListProps';
import type { HeadlineCommonProps } from '../../model/HeadlineType';

/**
 * @title Элемент списка
 */
export interface AccordionItemCommonProps {
  /**
   * @title Название
   * @default Список
   */
  label?: string;
  /** @title Отображать в раскрытом виде */
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
export type AccordionContent = HeadlineCommonProps & {
  /**
   * @title Выравнивание заголовка
   * @default center
   */
  accordionAlignTitle?: AlignType;
  version?: BlockVersion;
  /** @title Список */
  accordionItems?: AccordionItemCommonProps[];
  /**
   * @title Отображать/скрывать обводку у элемента списка
   * @default false
   */
  bordered?: boolean; // TODO: только для мобильной версии
};
