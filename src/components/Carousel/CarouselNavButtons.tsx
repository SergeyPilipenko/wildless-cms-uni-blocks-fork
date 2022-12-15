import { JSX } from '@redneckz/uni-jsx';
import { useCallback } from '@redneckz/uni-jsx/lib/hooks';
import type { VNode } from '../../model/VNode';
import { renderArrows } from '../../ui-kit/Button/renderArrows';

interface CarouselNavButtonsProps {
  cardsCount: number;
  activeCardIndex: number;
  setActiveCardIndex: (index: number) => void;
  cardFullViewCount: number;
  cards?: VNode[];
  isCycle?: boolean;
}

export const CarouselNavButtons = JSX<CarouselNavButtonsProps>(
  ({ cardsCount, activeCardIndex, setActiveCardIndex, cardFullViewCount, isCycle }) => {
    const isGalleryScrollAvailable = cardsCount > cardFullViewCount;

    const showNextButton =
      (isCycle && isGalleryScrollAvailable) ||
      (isGalleryScrollAvailable && cardsCount - activeCardIndex > cardFullViewCount);

    const showPrevButton =
      (isCycle && isGalleryScrollAvailable) || (isGalleryScrollAvailable && activeCardIndex > 0);

    const handleNextClick = useCallback(() => {
      if (isCycle) {
        const nextIndex = activeCardIndex + 1;
        setActiveCardIndex(cardsCount === nextIndex ? 0 : nextIndex);
      } else {
        setActiveCardIndex(activeCardIndex + 1);
      }
    }, []);

    const handlePrevClick = useCallback(() => {
      if (isCycle && cardsCount > 0) {
        const prevIndex = activeCardIndex - 1;
        setActiveCardIndex(prevIndex < 0 ? cardsCount - 1 : prevIndex);
      } else {
        setActiveCardIndex(activeCardIndex - 1);
      }
    }, []);

    return renderArrows({
      handler: [handlePrevClick, handleNextClick],
      isShown: [showPrevButton, showNextButton],
      btnClass: ['left-8', 'right-8'],
      className: 'top-1/2 z-10',
    });
  },
);
