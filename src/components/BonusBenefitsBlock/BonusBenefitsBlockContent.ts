import type { Picture } from '../../model/Picture';

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
  /**
   * @title Список бонусов
   * @maxItems 8
   */
  bonusBenefits?: BonusBenefit[];
}
