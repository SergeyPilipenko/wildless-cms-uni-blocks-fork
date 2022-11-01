import type { HeadlineCommonProps, TitleProps } from '../../model/HeadlineType';
import type { Picture } from '../../model/Picture';

export interface Month {
  /** @title Название месяца */
  text?: string;
  /**
   * @title Изображение календарного месяца
   * @default {
   *   "format": "webp",
   *   "size": {
   *       "width": 210
   *       "height": 190
   *   }
   * }
   */
  image?: Picture;
}

export interface CalendarItem {
  /** @title Месяц */
  month?: Month[];
  /** @title Основной текст */
  text?: string;
  /** @title Вспомогательный текст */
  greenText?: string;
}

/**
 * @title Льготный период
 */
export type GracePeriodContent = HeadlineCommonProps & {
  /** @title Календарь */
  calendar?: CalendarItem[];
};
