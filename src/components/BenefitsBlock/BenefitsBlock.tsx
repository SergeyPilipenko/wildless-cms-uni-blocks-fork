import { JSX } from '@redneckz/uni-jsx';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import type { BenefitItemProps, BenefitsBlockContent } from './BenefitsBlockContent';
import { DescriptionDef, ListBenefitDef, TextBenefitDef } from './BenefitsBlockContent';

export interface BenefitsBlockProps extends BenefitsBlockContent, UniBlockProps {}

export const BenefitsBlock = JSX<BenefitsBlockProps>(
  ({ className = '', title, benefitList, ...rest }) => {
    return (
      <BlockWrapper
        className={`font-sans text-primary-text bg-white p-12 flex flex-col items-center ${className}`}
        {...rest}
      >
        {title ? (
          <Heading headingType="h3" as="h2" className="max-w-[47rem] text-center" title={title} />
        ) : null}
        {benefitList?.length ? renderBenefits(benefitList) : null}
      </BlockWrapper>
    );
  },
);

const renderBenefits = (benefits: BenefitItemProps[]) => {
  return (
    <div className="flex flex-wrap w-full justify-center gap-x-20 mt-8">
      {benefits.map(renderStep)}
    </div>
  );
};

const renderStep = (benefit: BenefitItemProps, i: number) => {
  const description = benefit?.description || undefined;

  return (
    <div key={String(i)} className="flex items-center basis-1/2 max-w-[500px] mb-14">
      {benefit?.icon?.icon ? (
        <Img
          className="w-[50px] h-[50px] min-w-[50px] p-3 rounded-full bg-main-divider"
          image={benefit.icon}
          asSVG
        />
      ) : null}
      {benefit?.icon?.src ? <Img image={benefit.icon} /> : null}
      <div className="ml-5">
        {benefit?.label ? <h3 className="text-h6 m-0">{benefit.label}</h3> : null}
        {renderDescription(description)}
      </div>
    </div>
  );
};

const renderDescription = (description?: DescriptionDef) => {
  const benefitType = description ? description?.benefitType : null;
  if (!benefitType) {
    return null;
  }

  return description ? (
    <div className="text-l-light text-secondary-text mt-2">
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
