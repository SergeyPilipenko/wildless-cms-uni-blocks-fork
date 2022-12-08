import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import type { UniBlockProps } from '../../model/JSXBlock';
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
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [tabsShift, setTabsShift] = useState(0);

    const handleNextClick = () => setTabsShift(tabsShift + 1);
    const handlePrevClick = () => setTabsShift(tabsShift - 1);

    const isGalleryScrollAvailable = calculatorTabs?.length > 3;
    const showNextButton = isGalleryScrollAvailable && calculatorTabs?.length > tabsShift + 3;
    const showPrevButton = tabsShift > 0;

    return (
      <BlockWrapper
        context={context}
        className={`box-border overflow-hidden relative font-sans w-100 text-primary-text bg-white ${className}`}
        {...rest}
      >
        <div className="bg-white">
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
    : `h-[77px] w-[328px] min-w-[328px] px-5 py-4 ease-in duration-300 bg-white text-primary-text`;
  const btnTitleClassName = isActiveBtn ? 'text-xl mb-1.5' : `text-l mb-[3px]`;
  const btnDescClassName = isActiveBtn
    ? 'text-l-light text-white'
    : `text-m-light text-secondary-text`;
  const iconClassName = isActiveBtn ? '' : `text-primary-main`;
  const iconVersion = tab?.icon?.iconVersion;
  const activeIconStyle = isActiveBtn ? 'white' : 'normal';

  return (
    <button
      type="button"
      key={String(i)}
      onClick={onClick}
      aria-label={tab?.title}
      className={`box-border relative border border-main-stroke cursor-pointer text-left border-b-0 flex hover:h-[88px]
      ${btnClassName}`}
    >
      <Img
        className={`h-6 w-6 min-w-6 min-h-6 mr-4 ${iconClassName}`}
        image={{
          ...tab?.icon,
          iconVersion: iconVersion ?? activeIconStyle,
        }}
        width="24"
        height="24"
        asSVG
      />
      <div className="border-0">
        <div className={`${btnTitleClassName}`}>{tab?.title}</div>
        <div className={`${btnDescClassName}`}>{tab.description}</div>
      </div>
    </button>
  );
}

function renderTabs({ tabsShift, tabsNav, activeSlideIndex, setActiveSlideIndex }: TabsProps) {
  return (
    <div>
      <div
        style={{ transform: `translateX(-${tabsShift * 388}px)` }}
        className="flex flex-col justify-end items-center h-[126px] pt-9 box-border duration-1000"
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
