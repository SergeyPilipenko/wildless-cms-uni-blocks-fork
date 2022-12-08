import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { IconVersion } from '../../model/IconVersion';
import { Img } from '../Img/Img';
import type { BenefitItemCommonProps, BenefitItemProps } from './BenefitItemProps';
import { getIconWithVersion } from '../../utils/getIconWithVersion';

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
  const listItemAlign = description ? 'items-start' : 'items-center';
  const calcVersion = benefitsVersion === 'white' ? 'secondary' : 'primary';

  return (
    <div className={`flex gap-5 ${listItemAlign} ${className}`}>
      {icon ? (
        <div className={renderBenefitIconBgStyle(version, benefitsVersion)}>
          <Img className="w-6 h-6" image={getIconWithVersion(icon, calcVersion)} asSVG />
        </div>
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

function renderBenefitIconBgStyle(version: BlockVersion, benefitsVersion: IconVersion) {
  let bgColorStyle = 'bg-primary-main text-black';

  if (version === 'secondary') {
    bgColorStyle = 'bg-white/30 text-black';
  } else if (benefitsVersion === 'normal') {
    bgColorStyle = 'bg-secondary-light text-primary-main';
  }

  return `w-[50px] h-[50px] min-w-[50px] rounded-full p-2.5 box-border flex items-center justify-center ${bgColorStyle}`;
}
