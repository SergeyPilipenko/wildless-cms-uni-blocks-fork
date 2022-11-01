import type { IconProps, Picture } from '../../model/Picture';
import type { BlockVersion } from '../../model/BlockVersion';
import type { IconVersion } from '../../model/IconVersion';
import type { DescriptionProps, LabelProps } from '../../model/HeadlineType';

export interface BenefitItemCommonProps {
  benefitsVersion?: IconVersion;
  /** @hidden */
  version?: BlockVersion;
  /** @hidden */
  className?: string;
}

export type BenefitItemProps = DescriptionProps & LabelProps & IconProps & {};

/**
 * @title Преимущество
 */
export type BenefitsProps = BenefitItemCommonProps & {
  /** @title Список преимуществ */
  benefits?: BenefitItemProps[];
};
