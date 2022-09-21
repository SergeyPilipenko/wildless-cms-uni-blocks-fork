import type { Picture } from '../../model/Picture';
import type { BenefitsBlockContent } from '../BenefitsBlock/BenefitsBlockContent';
import type { InsuranceProps } from '../../model/Insurance';

export type InsuranceContent = BenefitsBlockContent &
  InsuranceProps & {
    /** @title Заголовок */
    title?: string;
    /** @title Описание */
    description?: string;
    image?: Picture;
  };
