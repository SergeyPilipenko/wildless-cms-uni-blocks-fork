import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { InsuranceAmountBlockContent } from './InsuranceAmountBlockContent';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import { InsuranceAmountBlockInner } from './InsuranceAmountBlockInner';

export interface InsuranceAmountBlockProps extends InsuranceAmountBlockContent, UniBlockProps {}

export const InsuranceAmountBlock = JSX<InsuranceAmountBlockProps>(
  ({ className = '', context, title, insuranceTabs = [], ...rest }) => {
    const [activeSlideIndex, setActiveSlideIndex] = context.useState(0);

    return (
      <BlockWrapper
        context={context}
        className={`box-border py-[50px] overflow-hidden relative font-sans w-100 bg-white ${className}`}
        {...rest}
      >
        {title ? <Heading className="text-center" title={title} headingType="h3" /> : null}
        {insuranceTabs?.length > 1 ? (
          <div className="p-1.5 bg-secondary-light w-fit m-auto rounded-md mt-[34px]">
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
            context,
            className,
            insuranceTabs,
          })}
        </div>
      </BlockWrapper>
    );
  },
);

const renderInsuranceGalleries = ({
  insuranceTabs,
  context,
  className = '',
}: InsuranceAmountBlockProps) => {
  const insuranceGalleries = insuranceTabs?.map((_) => _.cards);

  return insuranceGalleries?.length
    ? insuranceGalleries.map((cards, i) => (
        <InsuranceAmountBlockInner
          key={String(i)}
          context={context}
          className={className}
          cards={cards}
        />
      ))
    : null;
};

function renderNavButton({ title, i, activeSlideIndex, onClick }) {
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
