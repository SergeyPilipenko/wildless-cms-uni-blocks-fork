import type { Picture } from '../../model/Picture';
import type { BenefitsBlockContent } from '../BenefitsBlock/BenefitsBlockContent';

export type InsuranceContent = BenefitsBlockContent & {
  /** @title Заголовок */
  title?: string;
  /** @title Описание */
  description?: string;
  /** @title Ежемесячный лимит */
  monthLimit?: number;
  /** @title Страховая сумма */
  insuranceSum?: number;
  image?: Picture;
};
