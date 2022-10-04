import type { Picture } from '../../model/Picture';
import type { TitleProp } from '../../model/HeadlineType';

interface Month {
  /** @title Название месяца */
  text?: string;
  /**
   * @title Изображение календарного месяца
   * @default
   * {
   *  format: "webp",
   *  size: {
   *    width: 210,
   *    height: 190
   *   }
   * }
   */
  image?: Picture;
}

interface CalendarItem {
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
export interface GracePeriodContent extends TitleProp {
  /** @title Описание */
  description?: string;
  /** @title Календарь */
  calendar?: CalendarItem[];
}
