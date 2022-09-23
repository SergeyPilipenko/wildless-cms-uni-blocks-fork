import type { Picture } from '../../model/Picture';
import type { InsuranceProps } from '../../model/Insurance';

/**
 * @title Преимущество
 */
export interface InsuranceBenefit {
  /** @title Название */
  label?: string;
  /** @title Описание */
  description?: string;
  icon?: Picture;
}

/**
 * @title Страховка
 */
export type InsuranceContent = InsuranceProps & {
  /** @title Заголовок */
  title?: string;
  /** @title Описание */
  description?: string;
  image?: Picture;
  /**
   * @title Список преимуществ
   * @maxItems 6
   */
  benefits?: InsuranceBenefit[];
};
