import type { BlockVersion } from '../../model/BlockVersion';
import { Icon } from '../../ui-kit/Icon/Icon';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

const benefitIconBgStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-main',
  secondary: 'bg-white/30',
};
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
    <div key={String(i)} className="flex gap-4 items-center">
      {benefit.icon && (
        <Icon
          className={`w-[50px] h-[50px] min-w-[50px] min-h-[50px] rounded-full p-[10px] box-border ${benefitIconBgStyleMap[version]}`}
          name={benefit.icon}
          width="24"
          height="24"
          asSVG
        />
      )}
      <div className="flex gap-1 flex-col h-full max-w-[149px]">
        <div className={`font-medium text-xl m-0 ${benefitTitleStyleMap[version]}`}>
          {benefit.label}
        </div>
        {benefit.description && (
          <div className={`font-normal text-sm ${benefitDescStyleMap[version]}`}>
            {benefit.description}
          </div>
        )}
      </div>
    </div>
  );
}
