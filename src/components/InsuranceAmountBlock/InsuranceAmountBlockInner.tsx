import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import type { UniBlockProps } from '../../model/JSXBlock';
import { Button } from '../../ui-kit/Button/Button';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';
import { renderArrows } from '../../ui-kit/Button/renderArrows';
import { Img } from '../../ui-kit/Img/Img';
import { addSpacesBetweenNumbers } from '../../utils/addSpacesBetweenNumbers';
import type { CardItem, InsuranceAmountBlockTab } from './InsuranceAmountBlockContent';

export interface InsuranceAmountBlockInnerProps extends InsuranceAmountBlockTab, UniBlockProps {
  button?: ButtonProps;
}

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
  ({ className = '', cards = [], button }) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [tabsShift, setTabsShift] = useState(0);

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
        <div className="relative overflow-hidden">
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
        <Button className="w-[240px] text-center" version="primary" {...button} href={activeHref} />
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
  const cardsAlignStyle = cards.length > 2 ? 'justify-start' : 'justify-center';

  return (
    <div
      style={{ transform: `translateX(-${tabsShiftWidth}px)` }}
      className="duration-1000 px-[50px]"
    >
      <div className={`w-full flex flex-nowrap gap-3.5 pb-12 ${cardsAlignStyle}`}>
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
          className="p-5 rounded-full bg-secondary-light mr-[30px]"
          image={slide.icon}
          width="108"
          height="108"
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

function renderValueBlock(title: string, sum: number) {
  return (
    <div className="flex flex-col text-left whitespace-pre">
      <span className="text-h6">{addSpacesBetweenNumbers(sum)} ₽</span>
      <span className="text-secondary-text text-l mt-1">{title}</span>
    </div>
  );
}

function renderDoneIcon(isActive: boolean) {
  return isActive ? (
    <Img
      className={`h-6 w-6 min-w-6 min-h-6 absolute right-4 top-4`}
      image="DoneIcon"
      width="24"
      height="24"
    />
  ) : null;
}
