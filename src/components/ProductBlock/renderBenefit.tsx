import type { BlockVersion } from '../../model/BlockVersion';
import type { BenefitItemProps } from '../../ui-kit/BenefitItem/BenefitItemProps';
import type { IconVersion } from '../../model/IconVersion';
import { BenefitItem } from '../../ui-kit/BenefitItem/BenefitItem';

export const renderBenefit =
  (version: BlockVersion = 'primary', benefitsVersion: IconVersion = 'normal') =>
  ({ icon, label, description }: BenefitItemProps, i: number) =>
    (
      <BenefitItem
        key={String(i)}
        icon={icon}
        label={label}
        description={description}
        version={version}
        benefitsVersion={benefitsVersion}
      />
    );
