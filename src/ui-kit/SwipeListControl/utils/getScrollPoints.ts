/*
 Calculates array of breakpoints for each scrollable element in container.
 Returns array of tuples consisting of [start, end] boundary scrollLeft values.
*/
export const getScrollPoints = ({
  gap,
  padding,
  clientWidth,
  scrollWidth,
  childElementCount,
  itemWidth,
}: {
  gap: number;
  padding: number;
  clientWidth: number;
  scrollWidth: number;
  childElementCount: number;
  itemWidth: number;
}): [number, number][] => {
  const scrollableDistance = scrollWidth - clientWidth;

  if (childElementCount === 2) {
    return [
      [0, scrollableDistance],
      [scrollableDistance, scrollWidth],
    ];
  }

  const scrollItemWidth = itemWidth + gap;
  const edgeScrollDistance = clientWidth - gap - padding;

  const lastScrollableIdx = childElementCount - 2;
  const scrollPoints: [number, number][] = new Array(childElementCount)
    .fill(0)
    .map((_, idx) =>
      idx === 0 || idx === lastScrollableIdx
        ? [
            idx > 0 ? scrollableDistance - edgeScrollDistance : 0,
            idx > 0 ? scrollableDistance : edgeScrollDistance,
          ]
        : [
            (idx - 1) * scrollItemWidth + edgeScrollDistance,
            idx * scrollItemWidth + edgeScrollDistance,
          ],
    );
  scrollPoints[childElementCount - 1] = [scrollableDistance, scrollWidth];

  return scrollPoints;
};
