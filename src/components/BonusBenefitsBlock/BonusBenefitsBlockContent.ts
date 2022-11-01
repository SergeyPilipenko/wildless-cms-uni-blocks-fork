import type { IconProps, Picture } from '../../model/Picture';
import type { LabelProps, TitleProps } from '../../model/HeadlineType';

/**
 * @title Бонус и преимущество
 */
export type BonusBenefit = LabelProps & IconProps & {};

/**
 * @title Блок бонусов и преимуществ
 */
export type BonusBenefitsBlockContent = TitleProps & {
  /** @title Подзаголовок */
  subtitle?: string;
  /** @title Список бонусов */
  bonusBenefits?: BonusBenefit[];
};
