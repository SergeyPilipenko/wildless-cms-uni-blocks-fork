import type { BlockVersion } from '../../model/BlockVersion';
import { Icon } from '../../ui-kit/Icon/Icon';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

const benefitTitleStyleMap: Record<BlockVersion, string> = {
  primary: 'text-primary-text',
  secondary: 'text-white',
};
const benefitDescStyleMap: Record<BlockVersion, string> = {
  primary: 'text-secondary-text',
  secondary: 'text-white',
};

export function renderBenefit(benefit: Benefit, i: number, version: string) {
  return (
    <div key={String(i)} className="flex gap-3 items-center mb-2.5 last:mb-0">
      {benefit.icon && (
        <Icon
          className="w-[25px] h-[25px] rounded-full box-border"
          name={benefit.icon}
          width="24"
          height="24"
        />
      )}
      <h4 className={`font-medium text-m-base m-0 ${benefitTitleStyleMap[version]}`}>
        {benefit.label}
      </h4>
      {benefit.description && (
        <div className={`font-normal text-m-sm ${benefitDescStyleMap[version]}`}>
          {benefit.description}
        </div>
      )}
    </div>
  );
}
