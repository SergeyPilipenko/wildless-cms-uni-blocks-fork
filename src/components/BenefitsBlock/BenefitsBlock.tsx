import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { Picture } from '../../model/Picture';
import type { UniBlockProps } from '../../types';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import type { BenefitsBlockContent, ListBenefitDef, TextBenefitDef } from './BenefitsBlockContent';
import { BenefitBlockItemProps, DescriptionDef } from './BenefitsBlockContent';

export interface BenefitsBlockProps extends BenefitsBlockContent, UniBlockProps {}

const benefitsBlockStyleMap = {
  primary: 'bg-white',
  secondary: 'bg-primary-main',
};

const benefitsTextStyleMap = {
  primary: '',
  secondary: 'text-white',
};

const benefitsDescriptionStyleMap = {
  primary: 'text-secondary-text',
  secondary: 'text-white opacity-80',
};

const benefitsIconStyleMap = {
  primary: 'bg-main-divider text-primary-main',
  secondary: 'bg-white/30 text-black',
};

export const BenefitsBlock = JSX<BenefitsBlockProps>(
  ({ className = '', title, benefitList, benefitsBlockVersion = 'primary', ...rest }) => {
    return (
      <BlockWrapper
        className={`font-sans text-primary-text p-12 flex flex-col items-center ${className} ${benefitsBlockStyleMap[benefitsBlockVersion]}`}
        {...rest}
      >
        {title ? (
          <Heading
            headingType="h3"
            as="h2"
            className={`max-w-[47rem] text-center ${benefitsTextStyleMap[benefitsBlockVersion]}`}
            title={title}
          />
        ) : null}
        {benefitList?.length ? renderBenefits(benefitList, benefitsBlockVersion) : null}
      </BlockWrapper>
    );
  },
);

const renderBenefits = (
  benefitList: BenefitBlockItemProps[],
  benefitsBlockVersion: BlockVersion,
) => {
  return (
    <div className="flex flex-wrap w-full justify-center gap-x-20 mt-8">
      {benefitList.map(renderStep(benefitsBlockVersion))}
    </div>
  );
};

const setIconVersion = (benefitIcon: Picture, benefitsBlockVersion: BlockVersion) => {
  if (!benefitIcon.icon) {
    return benefitIcon;
  }
  benefitIcon.iconVersion = benefitsBlockVersion === 'secondary' ? 'white' : 'normal';

  return benefitIcon;
};

const renderStep =
  (benefitsBlockVersion: BlockVersion) => (benefit: BenefitBlockItemProps, i: number) => {
    const description = (benefit?.description || undefined) as DescriptionDef;

    return (
      <div key={String(i)} className="flex items-center basis-1/2 max-w-[500px] mb-14">
        {benefit?.icon?.icon ? (
          <Img
            className={`w-[50px] h-[50px] min-w-[50px] p-3 rounded-full ${benefitsIconStyleMap[benefitsBlockVersion]}`}
            image={setIconVersion(benefit.icon, benefitsBlockVersion)}
            asSVG
          />
        ) : null}
        {benefit?.icon?.src ? <Img image={benefit.icon} /> : null}
        <div className="ml-5">
          {benefit?.label ? (
            <h3 className={`text-h6 m-0 ${benefitsTextStyleMap[benefitsBlockVersion]}`}>
              {benefit.label}
            </h3>
          ) : null}
          {renderDescription(description, benefitsBlockVersion)}
        </div>
      </div>
    );
  };

const renderDescription = (description: DescriptionDef, benefitsBlockVersion: BlockVersion) => {
  const benefitType = description ? description?.benefitType : null;
  if (!benefitType) {
    return null;
  }

  return description ? (
    <div className={`text-l-light mt-2 ${benefitsDescriptionStyleMap[benefitsBlockVersion]}`}>
      {benefitType === 'list'
        ? renderListBenefit(description as ListBenefitDef)
        : renderTextBenefit(description as TextBenefitDef)}
    </div>
  ) : null;
};

const renderTextBenefit = (description?: TextBenefitDef) => (description ? description.name : null);

const renderListBenefit = (description?: ListBenefitDef) => {
  const listStyleType = description?.bullets ? 'list-disc pl-6' : '';

  return description?.items && description.items.length > 0 ? (
    <ul className={listStyleType}>
      {description.items.map((_, i) => (
        <li key={`benefitListItem-${i}`}>{_}</li>
      ))}
    </ul>
  ) : null;
};
