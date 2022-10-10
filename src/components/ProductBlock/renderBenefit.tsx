import type { BlockVersion } from '../../model/BlockVersion';
import { Img } from '../../ui-kit/Img/Img';
import { BenefitItemProps } from './ProductBlockContent';

const benefitTitleStyleMap: Record<BlockVersion, string> = {
  primary: 'text-primary-text',
  secondary: 'text-white',
};
const benefitDescStyleMap: Record<BlockVersion, string> = {
  primary: 'text-secondary-text',
  secondary: 'text-white',
};

export function renderBenefit(
  { benefit, version = 'primary', benefitsVersion = 'normal' }: BenefitItemProps,
  i: number,
) {
  const isIconWhite = benefitsVersion === 'white' || version === 'secondary';

  return (
    <div key={String(i)} className="flex gap-4 items-center">
      {benefit.icon ? (
        <Img
          className={renderBenefitIconBgStyle(version, benefitsVersion)}
          image={{ ...benefit?.icon, iconVersion: isIconWhite ? 'white' : 'normal' }}
          width="24"
          height="24"
          asSVG
        />
      ) : null}
      <div className="flex gap-0.5 flex-col h-full max-w-[149px] min-w-[149px]">
        <div className={`text-h6 m-0 ${benefitTitleStyleMap[version]}`}>{benefit.label}</div>
        {benefit.description ? (
          <div className={`text-m-light ${benefitDescStyleMap[version]}`}>
            {benefit.description}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function renderBenefitIconBgStyle(version, benefitsVersion) {
  let bgColorStyle = 'bg-primary-main text-black';

  if (version === 'secondary') {
    bgColorStyle = 'bg-white/30 text-black';
  } else if (benefitsVersion === 'normal') {
    bgColorStyle = 'bg-secondary-light text-primary-main';
  }

  return `w-[50px] h-[50px] min-w-[50px] min-h-[50px] rounded-full p-[10px] box-border ${bgColorStyle}`;
}
