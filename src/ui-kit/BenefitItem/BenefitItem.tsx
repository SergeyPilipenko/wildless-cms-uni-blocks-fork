import { JSX } from '@redneckz/uni-jsx';
import type { BenefitItemProps, BenefitItemCommonProps } from './BenefitItemProps';
import { Img } from '../Img/Img';
import type { BlockVersion } from '../../model/BlockVersion';

export interface BenefitGeneralProps extends BenefitItemProps, BenefitItemCommonProps {}

const titleStyleMap: Record<BlockVersion, string> = {
  primary: 'text-primary-text',
  secondary: 'text-white',
};
const descStyleMap: Record<BlockVersion, string> = {
  primary: 'text-secondary-text',
  secondary: 'text-white',
};

export const BenefitItem = JSX<BenefitGeneralProps>((props) => {
  const {
    className = '',
    icon,
    label,
    description,
    version = 'primary',
    benefitsVersion = 'normal',
  } = props;

  const isIconWhite = benefitsVersion === 'white' || version === 'secondary';

  return (
    <div className={`flex items-start gap-5 ${className}`}>
      {icon ? (
        <Img
          className={renderBenefitIconBgStyle(version, benefitsVersion)}
          image={{ ...icon, iconVersion: isIconWhite ? 'white' : 'normal' }}
          asSVG
        />
      ) : null}
      <div className="gap-0.5">
        {label ? <div className={`text-h6 ${titleStyleMap[version]}`}>{label}</div> : null}
        {description ? (
          <div className={`text-m-light ${descStyleMap[version]}`}>{description}</div>
        ) : null}
      </div>
    </div>
  );
});

function renderBenefitIconBgStyle(version, benefitsVersion) {
  let bgColorStyle = 'bg-primary-main text-black';

  if (version === 'secondary') {
    bgColorStyle = 'bg-white/30 text-black';
  } else if (benefitsVersion === 'normal') {
    bgColorStyle = 'bg-secondary-light text-primary-main';
  }

  return `w-[50px] h-[50px] min-w-[50px] rounded-full p-[10px] box-border ${bgColorStyle}`;
}
