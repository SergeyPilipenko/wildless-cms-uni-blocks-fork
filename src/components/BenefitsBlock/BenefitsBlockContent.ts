import type { Picture } from '../../model/Picture';
import type { HeadingCommonProps } from '../../ui-kit/Heading/HeadingProps';
import type { EmptyOption } from '../../model/EmptyOptionType';

/**
 * @title Пункты описания
 * @default {"benefitType": "text"}
 */
export type TextBenefitDef = {
  /**
   * @title Описание
   */
  name?: string;
  benefitType?: 'text';
};

/**
 * @title Список
 * @default {"benefitType": "list"}
 */
export type ListBenefitDef = {
  /** @title Буллиты */
  bullets?: boolean;
  /**
   * @title Пункты
   * @example ["Пункт 1"]
   */
  items?: string[];
  benefitType?: 'list';
};

/**
 * @title Вид контента
 */
export type DescriptionType = EmptyOption | TextBenefitDef | ListBenefitDef;

/**
 * @title Преимущество
 */
export interface BenefitItem {
  /** @title Название */
  label?: string;
  /** @title Описание */
  description?: DescriptionType;
  icon?: Picture;
}

/**
 * @title Блок преимущества
 */
export type BenefitsBlockContent = HeadingCommonProps & {
  /**
   * @title Список преимуществ
   * @maxItems 6
   */
  benefitList?: BenefitItem[];
};
