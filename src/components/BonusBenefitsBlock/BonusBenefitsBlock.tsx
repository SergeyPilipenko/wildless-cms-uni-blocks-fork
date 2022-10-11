import { JSX } from '@redneckz/uni-jsx';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import type { UniBlockProps } from '../../types';
import { Img } from '../../ui-kit/Img/Img';
import type { BonusBenefit, BonusBenefitsBlockContent } from './BonusBenefitsBlockContent';
import { getElementsColsValue } from './getElementsColsValue';
import { Headline } from '../Headline/Headline';

export interface BenefitsBlockProps extends BonusBenefitsBlockContent, UniBlockProps {}

export const BonusBenefitsBlock = JSX<BenefitsBlockProps>(
  ({ context, className = '', title, subtitle, bonusBenefits, ...rest }) => {
    return (
      <BlockWrapper
        className={`font-sans text-primary-text bg-white p-50 flex flex-col text-center ${className}`}
        context={context}
        {...rest}
      >
        <Headline
          context={context}
          className="!p-0"
          title={title}
          description={subtitle}
          headlineVersion="M"
          align="center"
        />
        {bonusBenefits?.length ? (
          <div className={`grid gap-1 mt-8 ${getElementsColsValue(className)}`}>
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
        {bonusBenefit?.label ? <span className="text-h6 m-0">{bonusBenefit.label}</span> : null}
      </div>
    </div>
  );
};
