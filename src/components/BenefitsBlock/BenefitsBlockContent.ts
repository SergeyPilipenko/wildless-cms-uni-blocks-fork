import type { Picture } from '../../model/Picture';

export interface TextBenefit {
  /** @title Название */
  label?: string;
  /** @title Описание */
  description?: string;
}

/**
 * @title Преимущество
 */
export interface Benefit extends TextBenefit {
  icon?: Picture;
}

/**
 * @title Блок преимущества
 */
export interface BenefitsBlockContent {
  /** @title Заголовок */
  title?: string;
  /**
   * @title Список преимуществ
   * @maxItems 6
   */
  benefits?: Benefit[];
}
