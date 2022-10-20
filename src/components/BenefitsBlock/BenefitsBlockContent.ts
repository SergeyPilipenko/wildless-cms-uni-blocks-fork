import type { Picture } from '../../model/Picture';
import type { TitleProps } from '../../model/HeadlineType';
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
 * @title Цвет блока
 * @enumNames ["Основная", "Второстепенная"]
 */
export type BenefitsBlockVersion = 'primary' | 'secondary';

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
  benefitsBlockVersion?: BenefitsBlockVersion;
};
