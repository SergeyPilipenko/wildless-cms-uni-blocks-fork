import { JSX } from '@redneckz/uni-jsx';

const DOT_STYLES = 'bg-primary-main opacity-30 w-1.5 h-1.5 min-w-1.5 min-h-1.5 rounded-full';
const BASE_DOT_WIDTH = 6;
const ACTIVE_DOT_WIDTH_CHANGE = 16;
const BASE_DOT_OPACITY = 0.3;
const ACTIVE_DOT_OPACITY_CHANGE = 0.7;

export interface SwipeListControlDotsProps {
  activeIndex: number;
  indexFraction: number;
  showDots?: boolean;
}

export const SwipeListControlDots = JSX<SwipeListControlDotsProps>(
  ({ children, activeIndex, indexFraction, showDots }) => {
    const handleClick = (idx: number) => (e: Event) => {
      if (idx === activeIndex) {
        return;
      }

      const contentContainer = (e.currentTarget as HTMLElement).parentElement
        ?.previousElementSibling;

      contentContainer?.children[idx]?.scrollIntoView({ behavior: 'smooth' });
    };

    return showDots && children?.length ? (
      <div className="flex gap-2 mx-auto mt-5 w-fit">
        {children?.map((_, idx) => (
          <div
            key={String(idx)}
            onClick={handleClick(idx)}
            className={`${DOT_STYLES}`}
            style={getDotStyles(idx, activeIndex, indexFraction)}
            aria-hidden
          />
        ))}
      </div>
    ) : null;
  },
);

const getDotStyles = (
  currentIdx: number,
  activeIndex: number,
  indexFraction: number,
): Record<string, string> | null => {
  if (currentIdx < activeIndex || currentIdx > activeIndex + 1) return null;

  const leftIndexMod = 1 - indexFraction;
  const rightIndexMod = indexFraction;

  return currentIdx === activeIndex
    ? {
        opacity: `${BASE_DOT_OPACITY + ACTIVE_DOT_OPACITY_CHANGE * leftIndexMod}`,
        width: `${BASE_DOT_WIDTH + ACTIVE_DOT_WIDTH_CHANGE * leftIndexMod}px`,
      }
    : {
        opacity: `${BASE_DOT_OPACITY + ACTIVE_DOT_OPACITY_CHANGE * rightIndexMod}`,
        width: `${BASE_DOT_WIDTH + ACTIVE_DOT_WIDTH_CHANGE * rightIndexMod}px`,
      };
};
