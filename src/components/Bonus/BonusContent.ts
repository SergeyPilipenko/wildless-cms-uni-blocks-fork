import type { HeadlineCommonProps } from '../../model/HeadlineType';

/**
 * @title Плитка
 */
export interface BonusItem {
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
export type BonusContent = HeadlineCommonProps & {
  /** @title Список плиток */
  bonusItems?: BonusItem[];
};
