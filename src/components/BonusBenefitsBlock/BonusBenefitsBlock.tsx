import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/ContentPageDef';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Img } from '../../ui-kit/Img/Img';
import { Headline } from '../Headline/Headline';
import type { BonusBenefit, BonusBenefitsBlockContent } from './BonusBenefitsBlockContent';
import { getElementsColsValue } from './getElementsColsValue';

export interface BenefitsBlockProps extends BonusBenefitsBlockContent, UniBlockProps {}

export const BonusBenefitsBlock = JSX<BenefitsBlockProps>(
  ({ context, className = '', title, subtitle, bonusBenefits, ...rest }) => (
    <BlockWrapper
      className={`font-sans text-primary-text bg-white p-[50px] flex flex-col text-center ${className}`}
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
  ),
);

const renderBonusBenefit = (bonusBenefit: BonusBenefit, i: number) => {
  return (
    <div key={String(i)} className="flex flex-col items-center max-w-[292px]">
      {bonusBenefit?.icon ? (
        <Img
          className="h-[160px] w-[180px] min-w-[180px] min-h-[160px]"
          image={bonusBenefit.icon}
          width="180"
          height="160"
        />
      ) : null}
      <div>
        {bonusBenefit?.label ? <span className="text-h6 m-0">{bonusBenefit.label}</span> : null}
      </div>
    </div>
  );
};
