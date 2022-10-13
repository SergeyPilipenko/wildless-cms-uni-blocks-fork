import type { Picture } from '../../model/Picture';
import type { BlockVersion } from '../../model/BlockVersion';
import type { IconVersion } from '../../model/IconVersion';

export interface BenefitItemCommonProps {
  benefitsVersion?: IconVersion;
  /** @hidden */
  version?: BlockVersion;
  /** @hidden */
  className?: string;
}

export type BenefitItemProps = {
  icon?: Picture;
  /** @title Название */
  label?: string;
  /** @title Описание */
  description?: string;
};

/**
 * @title Преимущество
 */
export type BenefitsProps = BenefitItemCommonProps & {
  /** @title Список преимуществ */
  benefits?: BenefitItemProps[];
};
