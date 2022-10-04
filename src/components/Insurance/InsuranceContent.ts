import type { Picture } from '../../model/Picture';
import type { HeadlineCommonProps } from '../../model/HeadlineType';

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
export type InsuranceContent = HeadlineCommonProps & {
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
