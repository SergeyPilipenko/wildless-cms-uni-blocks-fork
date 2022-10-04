import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Button } from '../../ui-kit/Button/Button';
import { renderArrows } from '../../ui-kit/Button/renderArrows';
import { Img } from '../../ui-kit/Img/Img';
import { addSpacesBetweenNumbers } from '../../utils/addSpacesBetweenNumbers';
import type { CardItem, InsuranceAmountBlockTabs } from './InsuranceAmountBlockContent';

export interface InsuranceAmountBlockInnerProps extends InsuranceAmountBlockTabs, UniBlockProps {}

type InsuranceGalleryProps = {
  tabsShift: number;
  cards: CardItem[];
  activeSlideIndex: number;
  isLastShift: boolean;
  setActiveSlideIndex: (index: number) => void;
};

type InsuranceSlideProps = {
  slide: CardItem;
  i: number;
  activeSlideIndex: number;
  onClick: () => void;
};

export const InsuranceAmountBlockInner = JSX<InsuranceAmountBlockInnerProps>(
  ({ className = '', context, cards = [] }) => {
    const [activeSlideIndex, setActiveSlideIndex] = context.useState(0);
    const [tabsShift, setTabsShift] = context.useState(0);

    const handleNextClick = () => setTabsShift(tabsShift + 1);
    const handlePrevClick = () => setTabsShift(tabsShift - 1);

    const galleryLength = cards?.length ?? 0;

    const isGalleryScrollAvailable = cards?.length > 2;
    const showNextButton = isGalleryScrollAvailable && galleryLength > tabsShift + 2;
    const isLastShift = galleryLength === tabsShift + 2;
    const showPrevButton = tabsShift > 0;
    const activeHref = cards[activeSlideIndex]?.href;

    return (
      <section role="listitem" className={`min-w-full text-center ${className}`}>
        <div className="relative mt-7 overflow-hidden">
          {galleryLength
            ? renderGallery({
                tabsShift,
                cards,
                activeSlideIndex,
                isLastShift,
                setActiveSlideIndex,
              })
            : null}
          {renderArrows({
            handler: [handlePrevClick, handleNextClick],
            isShown: [showPrevButton, showNextButton],
            btnClass: ['left-[50px]', 'right-[50px]'],
            className: 'top-[62px]',
          })}
          {showPrevButton ? (
            <div className="absolute top-0 left-0 h-full w-[136px] bg-opacity-from-white" />
          ) : null}
          {showNextButton ? (
            <div className="absolute top-0 right-0 h-full w-[136px] bg-opacity-to-white" />
          ) : null}
        </div>
        <Button className="w-[240px] p-4 text-center" version="primary" href={activeHref}>
          Выбрать программу
        </Button>
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
    <div
      style={{ transform: `translateX(-${tabsShiftWidth}px)` }}
      className="duration-1000 px-[50px]"
    >
      <div className="w-full flex flex-nowrap gap-3.5 pb-[38px]">
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
          className="p-3 rounded-full bg-secondary-light mr-[30px]"
          image={slide.icon}
          width="70"
          height="70"
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
    <div className="flex flex-col text-left whitespace-pre">
      <span className="text-h6">{addSpacesBetweenNumbers(sum)} ₽</span>
      <span className="text-secondary-text text-l mt-1">{title}</span>
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
