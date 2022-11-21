import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import { DEFAULT_GAP, DEFAULT_PADDING } from './constants';
import { SwipeListControlDots } from './SwipeListControlDots';
import { SwipeListControlList, SwipeListControlListProps } from './SwipeListControlList';
import type { SwipeListControlProps } from './SwipeListControlProps';
import { getIndexParts } from './utils/getIndexParts';
import { getScrollPoints } from './utils/getScrollPoints';

export const SwipeListControl = JSX<SwipeListControlProps>(
  ({
    className,
    children,
    gap = DEFAULT_GAP,
    padding = DEFAULT_PADDING,
    showDots = true,
    onSlideChange,
  }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [indexFraction, setIndexFraction] = useState(0);

    const dotsProps = {
      activeIndex,
      indexFraction,
      showDots,
      children,
    };

    const handleScroll: SwipeListControlListProps['onScroll'] = (e) => {
      const {
        scrollLeft,
        clientWidth,
        childElementCount,
        scrollWidth,
        children: childrenCollection,
      } = e?.currentTarget as HTMLElement;

      // horizontal PADDING / 2 to compensate padding-margin combo of child container
      // without CSS calc function, as wrapper element gets bigger in the DOM, remaining same visually
      const itemWidth = (childrenCollection[0] as HTMLElement).offsetWidth - padding / 2;
      const scrollPoints = getScrollPoints({
        gap,
        padding,
        clientWidth,
        scrollWidth,
        childElementCount,
        itemWidth,
      });

      const { index, fraction } = getIndexParts(scrollLeft, scrollPoints);
      if (index !== activeIndex && onSlideChange) {
        onSlideChange();
      }
      setActiveIndex(index);
      setIndexFraction(fraction);
    };

    return (
      <div className={className}>
        <SwipeListControlList
          gap={gap}
          padding={padding}
          activeIndex={activeIndex}
          onScroll={handleScroll}
        >
          {children}
        </SwipeListControlList>
        <SwipeListControlDots {...dotsProps} />
      </div>
    );
  },
);
