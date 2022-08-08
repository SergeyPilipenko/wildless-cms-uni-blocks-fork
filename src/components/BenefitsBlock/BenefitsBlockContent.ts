import type { IconName } from '../../ui-kit/Icon/IconProps';

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
  icon?: IconName;
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
