import type { HeadingContent } from '../../ui-kit/Heading/HeadingContent';
import type { Picture } from '../../model/Picture';

interface Month {
  /** @title Название месяца */
  name?: string;
  /** @title Изображение календарного месяца */
  image?: Picture;
}

interface CalendarItem {
  month?: Month[];
  /** @title Основной текст */
  blackText?: string;
  /** @title Вспомогательный текст */
  greenText?: string;
}

/**
 * @title Льготный период
 */
export interface GracePeriodContent extends HeadingContent {
  /** @title Описание */
  description?: string;
  /** @title Календарь */
  calendar?: CalendarItem[];
}
