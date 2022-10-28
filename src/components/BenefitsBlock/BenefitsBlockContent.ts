import type { BlockVersion } from '../../model/BlockVersion';
import type { EmptyOption } from '../../model/EmptyOptionType';
import type { TitleProps } from '../../model/HeadlineType';
import type { Picture } from '../../model/Picture';

/**
 * @title Пункты описания
 */
export type TextBenefitDef = {
  /** @title Описание */
  name?: string;
  /** @default text */
  benefitType?: 'text';
};

/**
 * @title Список
 */
export type ListBenefitDef = {
  /** @title Буллиты */
  bullets?: boolean;
  /**
   * @title Пункты
   * @default [
   *  "Пункт 1"
   * ]
   */
  items?: string[];
  /** @default list */
  benefitType?: 'list';
};

/**
 * @title Вид контента
 */
export type DescriptionDef = EmptyOption | TextBenefitDef | ListBenefitDef;

/**
 * @title Преимущество
 */
export interface BenefitBlockItemProps {
  /** @title Название */
  label?: string;
  /** @title Описание */
  description?: DescriptionDef;
  icon?: Picture;
}

/**
 * @title Блок преимущества
 */
export type BenefitsBlockContent = TitleProps & {
  /**
   * @title Список преимуществ
   * @maxItems 6
   */
  benefitList?: BenefitBlockItemProps[];
  /** @default primary */
  benefitsBlockVersion?: BlockVersion;
};
