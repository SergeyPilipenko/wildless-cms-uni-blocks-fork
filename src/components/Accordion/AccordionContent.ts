import type { AlignType } from '../../model/AlignType';
import type { BlockVersion } from '../../model/BlockVersion';
import type { HeadlineCommonProps } from '../../model/HeadlineType';

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

  /**
   * @title Отображать/скрывать обводку у элемента списка
   * @default false
   */
  bordered?: boolean; // TODO: только для мобильной версии
};
