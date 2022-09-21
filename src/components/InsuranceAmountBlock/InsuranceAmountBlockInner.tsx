import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps, FuncReturnVoid } from '../../types';
import type { InsuranceAmountBlockTabs, cardItem } from './InsuranceAmountBlockContent';
import { ArrowButton } from '../../ui-kit/Button/ArrowButton';
import { Img } from '../../ui-kit/Img/Img';
import { addSpacesBetweenNumbers } from '../../utils/addSpacesBetweenNumbers';

export interface InsuranceAmountBlockInnerProps extends InsuranceAmountBlockTabs, UniBlockProps {}

type InsuranceGalleryProps = {
  tabsShift: number;
  cards: cardItem[];
  activeSlideIndex: number;
  isLastShift: boolean;
  setActiveSlideIndex: FuncReturnVoid<number>;
};

type InsuranceSlideProps = {
  slide: cardItem;
  i: number;
  activeSlideIndex: number;
  onClick: FuncReturnVoid<MouseEvent>;
};

const arrowBtnStyle =
  'absolute w-12 h-12 min-h-12 max-h-12 top-1 z-10 mt-[25px] bg-white rounded-full text-primary-text';

export const InsuranceAmountBlockInner = JSX<InsuranceAmountBlockInnerProps>(
  ({ className = '', context, cards = [], anchor = null }) => {
    const [activeSlideIndex, setActiveSlideIndex] = context.useState(0);
    const [tabsShift, setTabsShift] = context.useState(0);

    const handleNextClick = () => setTabsShift(tabsShift + 1);
    const handlePrevClick = () => setTabsShift(tabsShift - 1);

    const galleryLength = cards?.length;

    const isGalleryScrollAvailable = cards?.length > 2;
    const showNextButton = isGalleryScrollAvailable && galleryLength > tabsShift + 2;
    const isLastShift = galleryLength === tabsShift + 2;
    const showPrevButton = tabsShift > 0;

    return (
      <section id={anchor} className={`min-w-full ${className}`}>
        <div className="relative mt-7 overflow-hidden">
          {galleryLength > 1
            ? renderGallery({
                tabsShift,
                cards,
                activeSlideIndex,
                isLastShift,
                setActiveSlideIndex,
              })
            : null}
          {showPrevButton ? (
            <div>
              <ArrowButton
                className={`${arrowBtnStyle} left-0 top-9`}
                onClick={handlePrevClick}
                ariaLabel="Пролистать влево"
                data-block-control="scroll-left"
              />
              <div className="absolute top-0 left-0 h-[168px] w-[84px] bg-opacity-from-white" />
            </div>
          ) : null}
          {showNextButton ? (
            <div>
              <ArrowButton
                className={`${arrowBtnStyle} right-0 top-9 rotate-180`}
                onClick={handleNextClick}
                ariaLabel="Пролистать вправо"
                data-block-control="scroll-right"
              />
              <div className="absolute top-0 right-0 h-[168px] w-[100px] bg-opacity-to-white" />
            </div>
          ) : null}
        </div>
      </section>
    );
  },
);

function renderGallery({
  tabsShift,
  cards,
  activeSlideIndex,
  isLastShift,
  setActiveSlideIndex,
}: InsuranceGalleryProps) {
  const tabsShiftWidth = isLastShift ? tabsShift * 460 - 240 : tabsShift * 460;
  return (
    <div style={{ transform: `translateX(-${tabsShiftWidth}px)` }} className="duration-1000">
      <div className="w-full flex flex-nowrap gap-3.5 pb-[38px] px-[50px]">
        {cards.map((slide, i) =>
          renderSlide({
            slide,
            i,
            activeSlideIndex,
            onClick: () => setActiveSlideIndex(i),
          }),
        )}
      </div>
    </div>
  );
}

function renderSlide({ slide, i, activeSlideIndex, onClick }: InsuranceSlideProps) {
  const isActiveBtn = i === activeSlideIndex;

  const btnClassName = isActiveBtn
    ? 'shadow-dark-blue/42 border-primary-main'
    : `ease-in duration-300 border-main-stroke`;

  return (
    <button
      type="button"
      key={String(i)}
      onClick={onClick}
      className={`p-[30px] min-w-[460px] flex items-center bg-white border-solid border relative ${btnClassName}`}
    >
      {slide?.icon ? (
        <Img
          className={`h-[108px] w-[108px] p-3 rounded-full bg-secondary-light mr-[30px]`}
          image={slide.icon}
          width="24"
          height="24"
        />
      ) : null}

      <div className="flex gap-3.5">
        {slide?.sum ? renderValueBlock('страховая сумма', slide.sum) : null}
        {slide?.fee ? renderValueBlock('страховой взнос', slide.fee) : null}
      </div>
      {renderDoneIcon(isActiveBtn)}
    </button>
  );
}

function renderValueBlock(title, sum) {
  return (
    <div className="flex flex-col text-left">
      <span className="whitespace-pre text-title-2xs">{addSpacesBetweenNumbers(sum)} ₽</span>
      <span className="whitespace-pre text-secondary-text font-light text-base mt-1">{title}</span>
    </div>
  );
}

function renderDoneIcon(isActive) {
  return isActive ? (
    <Img
      className={`h-[24px] w-[24px] min-w-[24px] min-h-[24px] absolute right-4 top-4`}
      image="DoneIcon"
      width="24"
      height="24"
    />
  ) : null;
}
