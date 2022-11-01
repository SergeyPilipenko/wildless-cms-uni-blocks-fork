import type { HeadlineCommonProps } from '../../model/HeadlineType';

/**
 * @title Плитка
 */
export type BonusItem = HeadlineCommonProps & {
  /** @title Количество баллов */
  bonusCount?: string;
  /** @title Наименование */
  bonusName?: string;
};

/**
 * @title Блок Бонусы
 */
export type BonusContent = HeadlineCommonProps & {
  /** @title Список плиток */
  bonusItems?: BonusItem[];
};
