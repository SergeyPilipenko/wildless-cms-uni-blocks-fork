import type { Picture } from '../../model/Picture';

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
export type InsuranceContent = {
  /** @title Заголовок */
  title?: string;
  /** @title Описание */
  description?: string;
  image?: Picture;
  /** @title Ежемесячный лимит */
  monthLimit?: number;
  /** @title Страховая сумма */
  sum?: number;
  /**
   * @title Список преимуществ
   * @maxItems 6
   */
  benefits?: InsuranceBenefit[];
};
