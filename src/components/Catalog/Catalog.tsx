import { JSX } from '@redneckz/uni-jsx';
import { useCallback, useState } from '@redneckz/uni-jsx/lib/hooks';
import type { UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { renderArrows } from '../../ui-kit/Button/renderArrows';
import { Headline } from '../Headline/Headline';
import { CatalogCard } from './CatalogCard';
import type { CatalogContent } from './CatalogContent';

export interface CatalogProps extends CatalogContent, UniBlockProps {}

const BLUR_BLOCK_CLASSES = 'absolute top-0 bottom-0 w-[84px]';
const CARD_FULL_VIEW_COUNT = 3;
const CARD_SHIFT = 430;

export const Catalog = JSX<CatalogProps>(
  ({ cards = [], className = '', title, description, ...rest }) => {
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const handleNextClick = useCallback(() => setActiveCardIndex((_) => _ + 1), []);
    const handlePrevClick = useCallback(() => setActiveCardIndex((_) => _ - 1), []);

    const isUseSlider = cards.length > CARD_FULL_VIEW_COUNT;
    const showNextButton = isUseSlider && cards.length - activeCardIndex > CARD_FULL_VIEW_COUNT;
    const showPrevButton = isUseSlider && activeCardIndex > 0;

    return (
      <BlockWrapper
        className={`bg-white relative font-sans p-[50px] overflow-hidden text-center ${className}`}
        {...rest}
      >
        <Headline
          className="!p-0"
          title={title}
          description={description}
          headlineVersion="M"
          align="center"
          {...rest}
        />
        <div
          className="flex duration-1000 gap-3.5 mt-8"
          style={{ transform: `translateX(-${activeCardIndex * CARD_SHIFT}px)` }}
          role="list"
        >
          {cards?.length ? cards.map((card, i) => <CatalogCard key={String(i)} {...card} />) : null}
        </div>
        {renderArrows({
          handler: [handlePrevClick, handleNextClick],
          isShown: [showPrevButton, showNextButton],
          btnClass: ['left-8', 'right-8'],
          className: 'top-1/2 z-10 mt-6',
        })}
        <div className={`${BLUR_BLOCK_CLASSES} left-0 bg-opacity-from-white`} />
        <div className={`${BLUR_BLOCK_CLASSES} right-0 bg-opacity-to-white`} />
      </BlockWrapper>
    );
  },
);
