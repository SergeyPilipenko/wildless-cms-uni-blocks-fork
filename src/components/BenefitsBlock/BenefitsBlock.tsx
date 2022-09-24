import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import type { BenefitItem, BenefitsBlockContent } from './BenefitsBlockContent';
import { DescriptionType, ListBenefitDef, TextBenefitDef } from './BenefitsBlockContent';

export interface BenefitsBlockProps extends BenefitsBlockContent, UniBlockProps {}

export const BenefitsBlock = JSX<BenefitsBlockProps>(
  ({ className = '', headingType = 'h2', title, benefitList, anchor = null }) => {
    return (
      <section
        className={`font-sans text-primary-text bg-white p-12 flex flex-col items-center ${className}`}
        id={anchor}
      >
        {title ? (
          <Heading
            headingType={headingType}
            as="h2"
            className="max-w-[47rem] text-center"
            title={title}
          />
        ) : null}
        {benefitList?.length ? renderBenefits(benefitList) : null}
      </section>
    );
  },
);

const renderBenefits = (benefits: BenefitItem[]) => {
  return (
    <div className="flex flex-wrap w-full justify-center gap-x-20 mt-9">
      {benefits.map(renderStep)}
    </div>
  );
};

const renderStep = (benefit: BenefitItem, i: number) => {
  const description = benefit?.description || undefined;

  return (
    <div key={String(i)} className="flex items-center basis-1/2 max-w-[500px] mb-[46px]">
      {benefit?.icon ? (
        <Img
          className="h-[70px] w-[70px] min-w-[70px] min-h-[70px] mr-5"
          image={benefit.icon}
          width="70"
          height="70"
        />
      ) : null}
      <div>
        {benefit?.label ? <h3 className="font-medium text-xl m-0">{benefit.label}</h3> : null}
        {renderDescription(description)}
      </div>
    </div>
  );
};

const renderDescription = (description?: DescriptionType) => {
  const benefitType = description ? description?.benefitType : null;
  if (!benefitType) {
    return null;
  }

  return description ? (
    <div className="font-light text-base text-secondary-text mt-2">
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
