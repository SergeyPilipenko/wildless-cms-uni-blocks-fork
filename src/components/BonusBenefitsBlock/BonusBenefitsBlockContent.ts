import type { LabelProps, TitleProps } from '../../model/HeadlineType';
import type { IconProps } from '../../model/Picture';
/**
 * @title Количество элементов в строке
 * @enumNames [
 *   "Четыре колонки",
 *   "Пять колонок",
 *  ]
 */
export type ColumnsCount = '4' | '5';

/**
 * @title Бонус и преимущество
 */
export type BonusBenefit = LabelProps & IconProps;

/**
 * @title Блок бонусов и преимуществ
 */
export type BonusBenefitsBlockContent = TitleProps & {
  /** @title Подзаголовок */
  subtitle?: string;
  /** @title Список бонусов */
  bonusBenefits?: BonusBenefit[];
  columnsCount?: ColumnsCount;
};
