import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import { VersionStyleMap } from '../../model/BlockVersion';
import { BorderVersionStyleMap } from '../../model/BorderVersion';
import type { UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { renderArrows } from '../../ui-kit/Button/renderArrows';
import { Heading } from '../../ui-kit/Heading/Heading';
import { RecommendationCard } from './RecommendationCard';
import type { RecommendationContent } from './RecommendationContent';

const BLUR_BLOCK_CLASSES = 'absolute top-0 bottom-0 w-[84px]';
const CARD_FULL_VIEW_COUNT = 2;
const CARD_SHIFT = 525;

export interface RecommendationProps extends RecommendationContent, UniBlockProps {}

export const Recommendation = JSX<RecommendationProps>(
  ({ recommendations = [], className = '', title, version = 'primary', ...rest }) => {
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    return (
      <BlockWrapper
        className={`relative font-sans p-9 overflow-hidden text-center ${VersionStyleMap[version]} ${className}`}
        {...rest}
      >
        {title ? <Heading headingType="h3" className="mb-6" title={title} /> : null}
        <div>
          <div
            className="flex duration-1000 gap-3.5"
            style={{ transform: `translateX(-${activeCardIndex * CARD_SHIFT}px)` }}
            role="list"
          >
            {recommendations?.length
              ? recommendations.map((card, i) => (
                  <RecommendationCard
                    key={String(i)}
                    version={version}
                    className={BorderVersionStyleMap[version]}
                    {...card}
                  />
                ))
              : null}
          </div>
          {renderNavButtons({
            cardsCount: recommendations.length,
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

const renderNavButtons = ({
  cardsCount,
  activeCardIndex,
  setActiveCardIndex,
}: {
  cardsCount: number;
  activeCardIndex: number;
  setActiveCardIndex: (index: number) => void;
}) => {
  const handleNextClick = () => setActiveCardIndex(activeCardIndex + 1);
  const handlePrevClick = () => setActiveCardIndex(activeCardIndex - 1);
  const isUseSlider = cardsCount > CARD_FULL_VIEW_COUNT;
  const showNextButton = isUseSlider && cardsCount - activeCardIndex > CARD_FULL_VIEW_COUNT;
  const showPrevButton = isUseSlider && activeCardIndex > 0;

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
