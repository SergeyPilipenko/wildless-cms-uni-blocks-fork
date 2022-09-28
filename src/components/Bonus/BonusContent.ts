import type { DescriptionContent } from '../../ui-kit/Description/DescriptionContent';
import type { HeadingContent } from '../../ui-kit/Heading/HeadingContent';

/** @title Плитка */
interface BonusItems {
  /** @title Бонусы */
  title?: string;
  /** @title Описание плитки */
  description?: string;
  /** @title Количество баллов */
  bonusCount?: string;
  /** @title Наименование */
  bonusName?: string;
}

/**
 * @title Блок Бонусы
 */
export type BonusContent = HeadingContent &
  DescriptionContent & {
    /** @title Список плиток */
    bonusItems?: BonusItems[];
  };
