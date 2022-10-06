import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { renderArrows } from '../../ui-kit/Button/renderArrows';
import { Img } from '../../ui-kit/Img/Img';
import type { CalculatorBlockDef, CalculatorContent, CalculatorNav } from './CalculatorContent';
import { renderCalculatorBlock } from './renderCalculatorBlock';

export interface CalculatorProps extends CalculatorContent, UniBlockProps {}

type TabsProps = {
  tabsShift: number;
  tabsNav: CalculatorNav[];
  activeSlideIndex: number;
  setActiveSlideIndex: (index: number) => void;
};

type NavButtonProps = {
  tab: CalculatorNav;
  i: number;
  activeSlideIndex: number;
  onClick: () => void;
};

export const Calculator = JSX<CalculatorProps>(
  ({ className = '', context, calculatorTabs = [], ...rest }) => {
    const tabsNav = calculatorTabs.map((_) => _.nav || ({} as CalculatorNav));
    const calculatorBlocks = calculatorTabs.map(
      ({ calculatorBlock }) => calculatorBlock || ({} as CalculatorBlockDef),
    );
    const [activeSlideIndex, setActiveSlideIndex] = context.useState(0);
    const [tabsShift, setTabsShift] = context.useState(0);

    const handleNextClick = () => setTabsShift(tabsShift + 1);
    const handlePrevClick = () => setTabsShift(tabsShift - 1);

    const isGalleryScrollAvailable = calculatorTabs?.length > 3;
    const showNextButton = isGalleryScrollAvailable && calculatorTabs?.length > tabsShift + 3;
    const showPrevButton = tabsShift > 0;

    return (
      <BlockWrapper
        context={context}
        className={`box-border overflow-hidden relative font-sans w-100 bg-white text-primary-text ${className}`}
        {...rest}
      >
        <div>
          {tabsNav.length > 1
            ? renderTabs({ tabsShift, tabsNav, activeSlideIndex, setActiveSlideIndex })
            : null}
          {renderArrows({
            handler: [handlePrevClick, handleNextClick],
            isShown: [showPrevButton, showNextButton],
            btnClass: ['left-3', 'right-3'],
            className: 'top-8',
          })}
        </div>
        <div
          className="flex"
          style={{ transform: `translateX(-${activeSlideIndex}00%)` }}
          role="list"
        >
          {calculatorBlocks?.length
            ? calculatorBlocks.map(renderCalculatorBlock({ context, className }))
            : null}
        </div>
      </BlockWrapper>
    );
  },
);

function renderNavButton({ tab, i, activeSlideIndex, onClick }: NavButtonProps) {
  const isActiveBtn = i === activeSlideIndex;

  const btnClassName = isActiveBtn
    ? 'h-[88px] w-[387px] min-w-[387px] p-5 border-none bg-primary-main text-white'
    : `h-[77px] w-[322px] min-w-[322px] px-5 py-4 ease-in duration-300 bg-white text-primary-text`;
  const btnTitleClassName = isActiveBtn ? 'text-xl mb-1.5' : `text-l mb-[3px]`;
  const btnDescClassName = isActiveBtn ? 'text-l text-white' : `text-m-md`;
  const iconClassName = isActiveBtn ? '' : `text-primary-main`;

  return (
    <button
      type="button"
      key={String(i)}
      onClick={onClick}
      aria-label={tab?.title}
      className={`box-border font-sans relative border border-main-stroke cursor-pointer text-left border-b-0 flex
      ${btnClassName}`}
    >
      <Img
        className={`h-[24px] w-[24px] min-w-[24px] min-h-[24px] mr-4 ${iconClassName}`}
        image={{ ...tab?.icon, iconVersion: isActiveBtn ? 'white' : 'normal' }}
        width="24"
        height="24"
        asSVG
      />
      <div className="border-0">
        <div className={`font-medium ${btnTitleClassName}`}>{tab?.title}</div>
        <div className={`text-secondary-text ${btnDescClassName}`}>{tab.description}</div>
      </div>
    </button>
  );
}

function renderTabs({ tabsShift, tabsNav, activeSlideIndex, setActiveSlideIndex }: TabsProps) {
  return (
    <div>
      <div
        style={{ transform: `translateX(-${tabsShift * 388}px)` }}
        className="flex flex-col justify-end items-center h-[126px] pt-[38px] box-border duration-1000"
      >
        <div className="w-full flex flex-nowrap items-end gap-2">
          {tabsNav.map((tab, i) =>
            renderNavButton({
              tab,
              i,
              activeSlideIndex,
              onClick: () => setActiveSlideIndex(i),
            }),
          )}
        </div>
      </div>
      <div className="w-full h-2 bg-primary-main" />
    </div>
  );
}
