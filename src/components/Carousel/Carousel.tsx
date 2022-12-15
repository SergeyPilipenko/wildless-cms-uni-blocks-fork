import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { CarouselContainer } from './CarouselContainer';
import { renderArrows } from '../../ui-kit/Button/renderArrows';
import { JSX } from '@redneckz/uni-jsx';
import { useCarouselControl } from '../../hooks/useCarousel';
import type { CarouselContent } from './CarouselContent';
import type { JSXBlock, UniBlockProps } from '../../model/JSXBlock';

export interface CarouselProps extends CarouselContent, UniBlockProps {}

export const Carousel: JSXBlock<CarouselProps> = JSX<CarouselProps>(
  ({
    cardFullViewCount = 1,
    children,
    cardWidth = 1007,
    className = '',
    isBlur = true,
    isCyclic = false,
    block,
    ...rest
  }) => {
    const blurClasses = isBlur ? 'absolute top-0 bottom-0 w-[84px]' : '';
    const { blocks: childBlocks } = block || {};

    const childBlocksLength = childBlocks !== undefined ? childBlocks.length : 0;

    const isScrollAvailable = childBlocksLength > cardFullViewCount;

    const [activeIndex, controls] = useCarouselControl({
      itemsCount: childBlocksLength,
      visibleItemCount: cardFullViewCount,
      isCyclic,
    });

    const { inc, dec, canDec, canInc } = controls;

    return (
      <BlockWrapper
        className={`box-border h-full relative font-sans flex flex-col justify-center overflow-hidden ${className}`}
        {...rest}
      >
        <CarouselContainer
          activeItem={activeIndex}
          cardFullViewCount={cardFullViewCount}
          cardWidth={cardWidth}
        >
          {children}
        </CarouselContainer>
        {isScrollAvailable ? (
          <div>
            {renderArrows({
              handler: [dec, inc],
              isShown: [canDec, canInc],
              btnClass: ['left-8', 'right-8'],
              className: 'top-1/2 z-10',
            })}
          </div>
        ) : null}
        {isScrollAvailable ? (
          <div>
            <div className={`${blurClasses} left-0 bg-opacity-from-white`} />
            <div className={`${blurClasses} right-0 bg-opacity-to-white`} />
          </div>
        ) : null}
      </BlockWrapper>
    );
  },
);

Carousel.childrenTypes = ['CarouselCard'];
