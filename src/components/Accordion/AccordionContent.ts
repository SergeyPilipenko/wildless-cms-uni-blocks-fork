import type { AlignType } from '../../model/AlignType';
import type { BlockVersion } from '../../model/BlockVersion';
import type { HeadlineCommonProps } from '../../model/HeadlineType';
import type { Picture } from '../../model/Picture';
import type { BlockDef } from '../../ui-kit/BlocksList/BlocksListProps';

export interface AccordionItemCommonProps {
  /**
   * @title Название
   * @default Список
   */
  label?: string;
  /** @title Отображать в раскрытом виде */
  isExpanded?: boolean;
  /**
   * @title Отображать/скрывать обводку элемента
   * @default false
   */
  bordered?: boolean; // TODO: только для мобильной версии
  labelIcon?: Picture; // TODO: только для мобильной версии
}

/**
 * @title Элемент списка
 */
export interface AccordionItem extends AccordionItemCommonProps {
  /** @title Блоки */
  blocks?: BlockDef[];
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
  accordionItems?: AccordionItem[];
  /**
   * @title Отображать/скрывать обводку у элемента списка
   * @default false
   */
  bordered?: boolean; // TODO: только для мобильной версии
};
