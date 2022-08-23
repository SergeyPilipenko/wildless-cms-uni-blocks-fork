import { JSX } from '@redneckz/uni-jsx';
import { DEFAULT_GAP, DEFAULT_PADDING } from './constants';
import { SwipeListControlDots } from './SwipeListControlDots';
import { SwipeListControlList } from './SwipeListControlList';
import { getIndexParts } from './utils/getIndexParts';
import { getScrollPoints } from './utils/getScrollPoints';
import type { SwipeListControlProps } from './SwipeListControlProps';

export const SwipeListControl = JSX<SwipeListControlProps>(
  ({
    className,
    context,
    children,
    gap = DEFAULT_GAP,
    padding = DEFAULT_PADDING,
    showDots = true,
    onSlideChange,
  }) => {
    const [activeIndex, setActiveIndex] = context.useState<number>(0);
    const [indexFraction, setIndexFraction] = context.useState<number>(0);

    const dotsProps = {
      activeIndex,
      indexFraction,
      showDots,
      children,
    };

    const handleScroll = (e: UIEvent) => {
      const { scrollLeft, clientWidth, childElementCount, scrollWidth, children } =
        e.currentTarget as HTMLElement;

      // horizontal PADDING / 2 to compensate padding-margin combo of child container
      // without CSS calc function, as wrapper element gets bigger in the DOM, remaining same visually
      const itemWidth = (children[0] as HTMLElement).offsetWidth - padding / 2;
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
