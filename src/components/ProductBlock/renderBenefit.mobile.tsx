import type { BlockVersion } from '../../model/BlockVersion';
import { Img } from '../../ui-kit/Img/Img';
import type { BenefitItemProps } from './ProductBlockContent';

const benefitTitleStyleMap: Record<BlockVersion, string> = {
  primary: 'text-primary-text',
  secondary: 'text-white',
};
const benefitDescStyleMap: Record<BlockVersion, string> = {
  primary: 'text-secondary-text',
  secondary: 'text-white',
};

export function renderBenefit({ benefit, version = 'primary' }: BenefitItemProps, i: number) {
  const isIconWhite = version === 'secondary';

  return (
    <div key={String(i)} className="flex gap-3 items-center mb-2.5 last:mb-0">
      {benefit.icon ? (
        <Img
          className={renderBenefitIconBgStyle(version)}
          image={{ ...benefit?.icon, iconVersion: isIconWhite ? 'white' : 'normal' }}
          width="24"
          height="24"
          asSVG
        />
      ) : null}
      <div className={`font-medium text-m-title-xs m-0 ${benefitTitleStyleMap[version]}`}>
        {benefit.label}
      </div>
      {benefit.description && (
        <div className={`font-normal text-m-sm ${benefitDescStyleMap[version]}`}>
          {benefit.description}
        </div>
      )}
    </div>
  );
}

function renderBenefitIconBgStyle(version) {
  let bgColorStyle = 'text-primary-main';

  if (version === 'secondary') {
    bgColorStyle = 'text-black';
  }

  return `w-6 h-6 rounded-full box-border ${bgColorStyle}`;
}
