import type { Picture } from '../../model/Picture';

/**
 * @title Бонус и преимущество
 */
export interface BonusBenefit {
  /** @title Название */
  label?: string;
  /** @title Изображение */
  icon?: Picture;
}

/**
 * @title Блок бонусов и преимуществ
 */
export interface BonusBenefitsBlockContent {
  /** @title Заголовок */
  title?: string;
  /** @title Подзаголовок */
  subtitle?: string;
  /** @title Список бонусов */
  bonusBenefits?: BonusBenefit[];
}
