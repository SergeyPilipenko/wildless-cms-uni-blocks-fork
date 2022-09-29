import { JSX } from '@redneckz/uni-jsx';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import type { BonusBenefit, BonusBenefitsBlockContent } from './BonusBenefitsBlockContent';
import { getElementsColsValue } from './getElementsColsValue';

export interface BenefitsBlockProps extends BonusBenefitsBlockContent, UniBlockProps {}

export const BonusBenefitsBlock = JSX<BenefitsBlockProps>(
  ({ className = '', title, subtitle, bonusBenefits, ...rest }) => {
    return (
      <BlockWrapper
        className={`font-sans text-primary-text bg-white p-50 flex flex-col text-center ${className}`}
        {...rest}
      >
        {title ? <Heading headingType="h3" className="mb-[10px]" title={title} /> : null}
        {subtitle ? <span className="text-md font-normal">{subtitle}</span> : null}
        {bonusBenefits?.length ? (
          <div className={`grid gap-1 ${getElementsColsValue(className)}`}>
            {bonusBenefits.map(renderBonusBenefit)}
          </div>
        ) : null}
      </BlockWrapper>
    );
  },
);

const renderBonusBenefit = (bonusBenefit: BonusBenefit, i: number) => {
  return (
    <div key={String(i)} className="flex flex-col items-center max-w-[292px]">
      {bonusBenefit?.icon ? (
        <Img
          className="h-[180px] w-[160px] min-w-[160px] min-h-[160px]"
          image={bonusBenefit.icon}
          width="160"
          height="180"
        />
      ) : null}
      <div>
        {bonusBenefit?.label ? <span className="title-2xs m-0">{bonusBenefit.label}</span> : null}
      </div>
    </div>
  );
};
