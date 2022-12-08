import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import type { BenefitsBlockContent, ListBenefitDef, TextBenefitDef } from './BenefitsBlockContent';
import { BenefitBlockItemProps, DescriptionDef } from './BenefitsBlockContent';
import { getIconWithVersion } from '../../utils/getIconWithVersion';

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
  ({ className = '', title, benefitList, version = 'primary', ...rest }) => (
    <BlockWrapper
      className={`font-sans text-primary-text p-12 flex flex-col items-center ${className} ${benefitsBlockStyleMap[version]}`}
      {...rest}
    >
      {title ? (
        <Heading
          headingType="h3"
          as="h2"
          className={`max-w-[47rem] text-center ${benefitsTextStyleMap[version]}`}
          title={title}
        />
      ) : null}
      {benefitList?.length ? renderBenefits(benefitList, version) : null}
    </BlockWrapper>
  ),
);

const renderBenefits = (benefitList: BenefitBlockItemProps[], version: BlockVersion) => (
  <div className="flex flex-wrap w-full justify-center gap-x-20 mt-8">
    {benefitList.map(renderStep(version))}
  </div>
);

const renderStep = (version: BlockVersion) => (benefit: BenefitBlockItemProps, i: number) => {
  const description = (benefit?.description || undefined) as DescriptionDef;

  return (
    <div key={String(i)} className="flex items-center basis-1/2 max-w-[500px] mb-14">
      {benefit?.icon?.icon ? (
        <Img
          className={`w-[50px] h-[50px] min-w-[50px] p-3 rounded-full ${benefitsIconStyleMap[version]}`}
          image={getIconWithVersion(benefit.icon, version)}
          asSVG
        />
      ) : null}
      {benefit?.icon?.src ? <Img image={benefit.icon} /> : null}
      <div className="ml-5">
        {benefit?.label ? (
          <h3 className={`text-h6 m-0 ${benefitsTextStyleMap[version]}`}>{benefit.label}</h3>
        ) : null}
        {renderDescription(description, version)}
      </div>
    </div>
  );
};

const renderDescription = (description: DescriptionDef, version: BlockVersion) => {
  const benefitType = description ? description?.benefitType : null;

  return description && benefitType ? (
    <div className={`text-l-light mt-2 ${benefitsDescriptionStyleMap[version]}`}>
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
