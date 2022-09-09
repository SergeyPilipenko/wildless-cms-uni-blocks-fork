import type { BlockVersion } from '../../model/BlockVersion';
import { Img } from '../../ui-kit/Img/Img';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

const benefitIconBgStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-primary-main',
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
      {benefit.icon ? (
        <Img
          className={`w-[50px] h-[50px] min-w-[50px] min-h-[50px] rounded-full p-[10px] box-border text-primary-text ${benefitIconBgStyleMap[version]}`}
          image={benefit.icon}
          width="24"
          height="24"
          asSVG
        />
      ) : null}
      <div className="flex gap-0.5 flex-col h-full max-w-[149px]  min-w-[149px]">
        <div className={`text-xl m-0 ${benefitTitleStyleMap[version]}`}>{benefit.label}</div>
        {benefit.description && (
          <div className={`font-light text-m-md ${benefitDescStyleMap[version]}`}>
            {benefit.description}
          </div>
        )}
      </div>
    </div>
  );
}
