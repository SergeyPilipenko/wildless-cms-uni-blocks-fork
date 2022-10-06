import { JSX } from '@redneckz/uni-jsx';
import { DEFAULT_GAP, DEFAULT_PADDING } from './constants';
import { SwipeListControlItem } from './SwipeListControlItem';
import { SwipeContainer } from './SwipeListControlProps';
import { getContainerStyle } from './utils/getContainerStyle';

/**
 * @title Список
 */
export interface SwipeListControlListProps extends SwipeContainer {
  className?: string;
  activeIndex: number;
  onScroll?: (e) => void;
}

export const SwipeListControlList = JSX<SwipeListControlListProps>(
  ({
    className = '',
    children,
    activeIndex,
    onScroll,
    gap = DEFAULT_GAP,
    padding = DEFAULT_PADDING,
  }) => {
    return (
      <div
        className={`overflow-auto flex horizontal-list no-scrollbar ${className}`}
        style={{ ...getContainerStyle(padding), gap: `${gap}px` }}
        role="list"
        onScroll={onScroll}
      >
        {children?.length ? (
          children?.map((child, idx) => (
            <SwipeListControlItem
              key={String(idx)}
              style={getContainerStyle(padding / 4)}
              aria-current={Boolean(activeIndex === idx)}
            >
              {child}
            </SwipeListControlItem>
          ))
        ) : (
          <SwipeListControlItem>{children}</SwipeListControlItem>
        )}
      </div>
    );
  },
);
