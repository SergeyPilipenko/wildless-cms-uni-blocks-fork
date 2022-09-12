import type { Picture } from '../../model/Picture';

interface Month {
  /** @title Название месяца */
  name?: string;
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
  blackText?: string;
  /** @title Вспомогательный текст */
  greenText?: string;
}

/**
 * @title Льготный период
 */
export interface GracePeriodContent {
  /** @title Заголовок */
  title?: string;
  /** @title Описание */
  description?: string;
  /** @title Календарь */
  calendar?: CalendarItem[];
}
