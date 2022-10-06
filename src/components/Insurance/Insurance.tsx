import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Img } from '../../ui-kit/Img/Img';
import { addSpacesBetweenNumbers } from '../../utils/addSpacesBetweenNumbers';
import { Headline } from '../Headline/Headline';
import type { InsuranceBenefit, InsuranceContent } from './InsuranceContent';

export interface InsuranceProps extends InsuranceContent, UniBlockProps {}

export const Insurance = JSX<InsuranceProps>(
  ({ context, className = '', title, description, image, benefits, sum, monthLimit, ...rest }) => {
    return (
      <BlockWrapper
        className={`px-[100px] py-[50px] bg-white text-primary-text font-sans ${className}`}
        context={context}
        {...rest}
      >
        <Headline
          context={context}
          className="!p-0"
          title={title}
          description={description}
          headlineVersion="M"
          align="center"
        />
        <div>
          <div className="mx-auto flex justify-center gap-[122px] mt-[30px]">
            {image?.src ? <Img image={image} /> : null}
            <div className="w-[558px] m-auto">
              {benefits ? (
                <div className="flex flex-col gap-4">{benefits.map(renderBenefit)}</div>
              ) : null}
              {renderInsuranceSumMonth(sum, monthLimit)}
            </div>
          </div>
        </div>
      </BlockWrapper>
    );
  },
);

function renderBenefit(benefit: InsuranceBenefit, i: number) {
  return (
    <div key={String(i)} className="flex items-center gap-4">
      {benefit?.icon ? (
        <Img
          className="w-12 h-12 min-w-12 p-3 rounded-full bg-secondary-light"
          image={benefit.icon}
          asSVG
        />
      ) : null}
      <div>
        {benefit?.label ? <div className="text-h6">{benefit.label}</div> : null}
        {benefit?.description ? (
          <div className="mt-0.5 text-secondary-text text-m">{benefit.description}</div>
        ) : null}
      </div>
    </div>
  );
}

function renderInsuranceSumMonth(sum?: number, monthLimit?: number) {
  return sum || monthLimit ? (
    <div className="bg-secondary-light h-15 flex mt-7 gap-6 px-5 py-4">
      {Number.isFinite(sum) ? renderValueBlock('Страховая сумма:', sum, Boolean(monthLimit)) : null}
      {Number.isFinite(monthLimit)
        ? renderValueBlock('Ежемесячный лимит:', monthLimit, Boolean(sum))
        : null}
    </div>
  ) : null;
}

function renderValueBlock(title: string, sum = 0, isAnotherBlock = false) {
  const widthStyle = isAnotherBlock ? 'w-fit' : 'w-full';

  return (
    <div className={`flex justify-between items-center gap-2 w-full ${widthStyle}`}>
      <span className="text-secondary-text text-l-light">{title}</span>
      <span className="text-primary-main text-h6">{addSpacesBetweenNumbers(sum)} ₽</span>
    </div>
  );
}
