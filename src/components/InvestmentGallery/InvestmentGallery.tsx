import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import type { UniBlockProps } from '../../model/JSXBlock';
import type { BlockVersion } from '../../model/BlockVersion';
import { VersionStyleMap } from '../../model/BlockVersion';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { renderArrows } from '../../ui-kit/Button/renderArrows';
import { Heading } from '../../ui-kit/Heading/Heading';
import { InvestmentGalleryCard } from './InvestmentGalleryCard';
import type {
  InvestmentGalleryCardTypes,
  InvestmentGalleryContent,
} from './InvestmentGalleryContent';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';

const BLUR_BLOCK_CLASSES = 'absolute top-0 bottom-0 w-[84px]';
const CARD_FULL_VIEW_COUNT = 1;

export interface InvestmentGalleryProps extends InvestmentGalleryContent, UniBlockProps {}

interface NavButtonsProps {
  cardsCount: number;
  activeCardIndex: number;
  setActiveCardIndex: (number: number) => void;
}

export const InvestmentGallery = JSX<InvestmentGalleryProps>(
  ({ context, cards = [], className = '', title, version = 'primary', ...rest }) => {
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const cardWidth = 525;

    return (
      <BlockWrapper
        context={context}
        className={`relative font-sans p-9 overflow-hidden text-center 
        ${VersionStyleMap[version]} 
        ${className}`}
        {...rest}
      >
        {title ? <Heading headingType="h3" className="mb-9" title={title} /> : null}
        <div>
          <div
            className="flex duration-1000 gap-3.5"
            style={{ transform: `translateX(-${activeCardIndex * cardWidth}px)` }}
            role="list"
          >
            {cards?.length
              ? cards.map(renderInvestmentGalleryCard(context, className, version))
              : null}
          </div>
          {renderNavButtons({
            cardsCount: cards.length,
            activeCardIndex,
            setActiveCardIndex,
          })}
        </div>
        <div
          className={`${BLUR_BLOCK_CLASSES} left-0 ${
            version === 'secondary' ? 'bg-opacity-from-main' : 'bg-opacity-from-white'
          }`}
        />
        <div
          className={`${BLUR_BLOCK_CLASSES} right-0 ${
            version === 'secondary' ? 'bg-opacity-to-main' : 'bg-opacity-to-white'
          }`}
        />
      </BlockWrapper>
    );
  },
);

const renderInvestmentGalleryCard =
  (context: ContentPageContext, className: string, version?: BlockVersion) =>
  (card: InvestmentGalleryCardTypes, i: number) =>
    (
      <InvestmentGalleryCard
        key={String(i)}
        className={className}
        context={context}
        version={version}
        {...card}
      />
    );

const renderNavButtons = ({ cardsCount, activeCardIndex, setActiveCardIndex }: NavButtonsProps) => {
  const isUseSlider = cardsCount > CARD_FULL_VIEW_COUNT;
  const showNextButton = isUseSlider && cardsCount - activeCardIndex > CARD_FULL_VIEW_COUNT;
  const showPrevButton = isUseSlider && activeCardIndex > 0;

  const handleNextClick = () => setActiveCardIndex(activeCardIndex + 1);
  const handlePrevClick = () => setActiveCardIndex(activeCardIndex - 1);

  return (
    <div>
      {renderArrows({
        handler: [handlePrevClick, handleNextClick],
        isShown: [showPrevButton, showNextButton],
        btnClass: ['left-8', 'right-8'],
        className: 'top-1/2 mt-3',
      })}
    </div>
  );
};
