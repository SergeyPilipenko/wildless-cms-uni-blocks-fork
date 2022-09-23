import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { addSpacesBetweenNumbers } from '../../utils/addSpacesBetweenNumbers';
import type { InsuranceBenefit, InsuranceContent } from './InsuranceContent';

export interface InsuranceProps extends InsuranceContent, UniBlockProps {}

export const Insurance = JSX<InsuranceProps>(
  ({ className = '', title, description, image, benefits, sum, monthLimit }) => {
    return (
      <section className={`px-[100px] py-[50px] bg-white text-primary-text ${className}`}>
        {title ? <Heading headingType="h3" title={title} className="text-center" /> : null}
        {description ? <div className="text-center text-md mt-3">{description}</div> : null}
        <div>
          <div className="mt-5 mx-auto flex justify-center gap-[120px] mt-[30px]">
            {image?.src ? <Img image={image} /> : null}
            <div className="w-[558px] m-auto">
              {benefits ? (
                <div className="flex flex-col gap-4">{benefits.map(renderBenefit)}</div>
              ) : null}

              <div className="bg-secondary-light h-15 flex mt-7 gap-6 px-5 py-4">
                {sum ? renderValueBlock('Страховая сумма:', sum, Boolean(monthLimit)) : null}
                {monthLimit
                  ? renderValueBlock('Ежемесячный лимит:', monthLimit, Boolean(sum))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

function renderBenefit(benefit: InsuranceBenefit, i: number) {
  return (
    <div key={String(i)} className="flex items-center gap-5">
      {benefit?.icon ? (
        <Img
          className="w-[50px] h-[50px] min-w-[50px] p-3 rounded-full bg-secondary-light"
          image={benefit.icon}
          width="24"
          height="24"
          asSVG
        />
      ) : null}
      <div>
        {benefit?.label ? <div className="text-title-2xs">{benefit.label}</div> : null}
        {benefit?.description ? (
          <div className="mt-2 font-light text-secondary-text">{benefit.description}</div>
        ) : null}
      </div>
    </div>
  );
}

function renderValueBlock(title, sum, isAnotherBlock) {
  const widthStyle = isAnotherBlock ? 'w-fit' : 'w-full';
  return (
    <div className={`flex justify-between items-center gap-2 w-full ${widthStyle}`}>
      <span className="text-secondary-text text-base">{title}</span>
      <span className="text-primary-main text-title-2xs">{addSpacesBetweenNumbers(sum)} ₽</span>
    </div>
  );
}
