import type { DescriptionContent } from '../../ui-kit/Description/DescriptionContent';
import type { HeadingContent } from '../../ui-kit/Heading/HeadingContent';

/** @title Список плиток */
interface BonusItems {
  /** @title Заголовок плитки */
  name?: string;
  /** @title Описание плитки */
  description?: string;
  /** @title Количество баллов */
  bonusCount?: number;
  /** @title Наименование */
  bonusName?: string;
}

/**
 * @title Плитка
 */
export type BonusContent = HeadingContent &
  DescriptionContent & {
    bonusItems?: BonusItems[];
  };
