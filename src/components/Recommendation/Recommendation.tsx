import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { RecommendationCard } from './RecommendationCard';
import type { RecommendationCardTypes, RecommendationContent } from './RecommendationContent';
import { renderArrows } from '../../ui-kit/Button/renderArrows';

const BLUR_BLOCK_CLASSES = 'absolute top-0 bottom-0 w-[84px]';
const CARD_FULL_VIEW_COUNT = 2;
const CARD_SHIFT = 525;

export interface RecommendationProps extends RecommendationContent, UniBlockProps {}

export const Recommendation = JSX<RecommendationProps>(
  ({ context, recommendations = [], className = '', title, version, anchor = null }) => {
    const [activeCardIndex, setActiveCardIndex] = context.useState(0);

    const blockClassName =
      version === 'secondary' ? 'bg-primary-main text-white' : 'bg-white text-primary-text';
    const cardClassName = version === 'secondary' ? 'border-white/50' : 'border-main-stroke';

    return (
      <section
        className={`relative font-sans p-9 overflow-hidden text-center ${blockClassName} ${className}`}
        id={anchor}
      >
        {title ? <Heading headingType="h2" className="mb-6" title={title} /> : null}
        <div
          className="flex duration-1000 gap-3.5"
          style={{ transform: `translateX(-${activeCardIndex * CARD_SHIFT}px)` }}
          role="list"
        >
          {recommendations?.length
            ? recommendations.map(
                renderRecommendationCard({ context, version, className: cardClassName }),
              )
            : null}
        </div>
        {renderNavButtons({
          cardsCount: recommendations.length,
          activeCardIndex,
          setActiveCardIndex,
        })}
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
      </section>
    );
  },
);

const renderRecommendationCard =
  ({ context, version, className }) =>
  (card: RecommendationCardTypes, i: number) => {
    return (
      <RecommendationCard
        key={String(i)}
        context={context}
        {...card}
        version={version}
        className={className}
      />
    );
  };

const renderNavButtons = ({
  cardsCount,
  activeCardIndex,
  setActiveCardIndex,
}: {
  cardsCount: number;
  activeCardIndex: number;
  setActiveCardIndex: (number) => void;
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
        className: 'top-1/2 mt-6',
      })}
    </div>
  );
};
