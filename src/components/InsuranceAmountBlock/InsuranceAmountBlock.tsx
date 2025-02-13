import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import type { UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import type { InsuranceAmountBlockContent } from './InsuranceAmountBlockContent';
import { InsuranceAmountBlockInner } from './InsuranceAmountBlockInner';

interface RenderNavButtonProps {
  title?: string;
  i: number;
  activeSlideIndex?: number;
  onClick: () => void;
}

export interface InsuranceAmountBlockProps extends InsuranceAmountBlockContent, UniBlockProps {}

export const InsuranceAmountBlock = JSX<InsuranceAmountBlockProps>(
  ({ className = '', title, insuranceTabs = [], button, ...rest }) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
      <BlockWrapper
        className={`box-border py-[50px] overflow-hidden relative font-sans w-100 bg-white ${className}`}
        {...rest}
      >
        {title ? <Heading className="text-center mb-8" title={title} headingType="h3" /> : null}
        {insuranceTabs?.length > 1 ? (
          <div className="p-1.5 bg-secondary-light w-fit mx-auto mb-7 rounded-md">
            {insuranceTabs.map((item, i) =>
              renderNavButton({
                title: item?.title,
                i,
                activeSlideIndex,
                onClick: () => setActiveSlideIndex(i),
              }),
            )}
          </div>
        ) : null}
        <div
          className="flex"
          style={{ transform: `translateX(-${activeSlideIndex}00%)` }}
          role="list"
        >
          {renderInsuranceGalleries({
            insuranceTabs,
            button,
          })}
        </div>
      </BlockWrapper>
    );
  },
);

const renderInsuranceGalleries = ({ insuranceTabs, button }: InsuranceAmountBlockContent) => {
  const insuranceGalleries = insuranceTabs?.map((_) => _.cards);

  return insuranceGalleries?.length
    ? insuranceGalleries.map((cards, i) => (
        <InsuranceAmountBlockInner key={String(i)} button={button} cards={cards} />
      ))
    : null;
};

function renderNavButton({ title, i, activeSlideIndex, onClick }: RenderNavButtonProps) {
  const isActiveBtn = i === activeSlideIndex;

  const btnClassName = isActiveBtn
    ? 'bg-primary-main text-white rounded-md'
    : `text-secondary-text`;

  return (
    <button
      type="button"
      key={String(i)}
      onClick={onClick}
      aria-label={title}
      className={`box-border px-4 py-3 text-m-light ${btnClassName}`}
    >
      {title}
    </button>
  );
}
