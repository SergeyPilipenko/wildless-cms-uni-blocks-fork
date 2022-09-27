import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { renderArrows } from '../../ui-kit/Button/renderArrows';
import { Description } from '../../ui-kit/Description/Description';
import { Heading } from '../../ui-kit/Heading/Heading';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';
import { CatalogCard } from './CatalogCard';
import type { CatalogCardType, CatalogContent } from './CatalogContent';

export interface CatalogProps extends CatalogContent, UniBlockProps {}

const BLUR_BLOCK_CLASSES = 'absolute top-0 bottom-0 w-[84px]';
const CARD_FULL_VIEW_COUNT = 3;
const CARD_SHIFT = 430;

export const Catalog = JSX<CatalogProps>(
  ({ context, cards = [], className = '', title, description, anchor = null }) => {
    const [activeCardIndex, setActiveCardIndex] = context.useState(0);

    return (
      <section
        className={`bg-white relative font-sans p-9 overflow-hidden text-center ${className}`}
        id={anchor}
      >
        {title ? <Heading headingType="h2" className="mb-6" title={title} /> : null}
        {description ? <Description className="mb-6" description={description} /> : null}
        <div
          className="flex duration-1000 gap-3.5"
          style={{ transform: `translateX(-${activeCardIndex * CARD_SHIFT}px)` }}
          role="list"
        >
          {cards?.length ? cards.map(renderCatalogCard(context)) : null}
        </div>
        {renderNavButtons({
          cardsCount: cards.length,
          activeCardIndex,
          setActiveCardIndex,
        })}
        <div className={`${BLUR_BLOCK_CLASSES} left-0 ${'bg-opacity-from-white'}`} />
        <div className={`${BLUR_BLOCK_CLASSES} right-0 ${'bg-opacity-to-white'}`} />
      </section>
    );
  },
);

const renderCatalogCard = (context: ContentPageContext) => (card: CatalogCardType, i: number) => {
  return <CatalogCard key={String(i)} context={context} {...card} />;
};

interface RenderNavButtonsProps {
  cardsCount: number;
  activeCardIndex: number;
  setActiveCardIndex: (number) => void;
}

const renderNavButtons = ({
  cardsCount,
  activeCardIndex,
  setActiveCardIndex,
}: RenderNavButtonsProps) => {
  const handleNextClick = () => setActiveCardIndex(activeCardIndex + 1);
  const handlePrevClick = () => setActiveCardIndex(activeCardIndex - 1);

  const isUseSlider = cardsCount > CARD_FULL_VIEW_COUNT;
  const showNextButton = isUseSlider && cardsCount - activeCardIndex > CARD_FULL_VIEW_COUNT;
  const showPrevButton = isUseSlider && activeCardIndex > 0;

  return renderArrows({
    handler: [handlePrevClick, handleNextClick],
    isShown: [showPrevButton, showNextButton],
    btnClass: ['left-8', 'right-8'],
    className: 'top-1/2 z-10 mt-6',
  });
};
