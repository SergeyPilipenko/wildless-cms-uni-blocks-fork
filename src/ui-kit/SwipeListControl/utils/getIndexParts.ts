/*
  Returns object containing whole index part, and it's decimal part for a given
  scrollLeft value of a container and an array of tuple containing values of a
  start and end boundaries of a scrollable child, right boundary non-inclusive.
  Returns object with index equal -1 and fraction equal 0 if scrollLeft is outside given scrollPoints
 */
export const getIndexParts = (
  scrollLeft: number,
  scrollPoints: [number, number][],
): {
  index: number;
  fraction: number;
} => {
  const index = scrollPoints.findIndex(
    ([pointStart, pointEnd]) => pointStart <= scrollLeft && scrollLeft < pointEnd,
  );
  if (index < 0) {
    return { index, fraction: 0 };
  }

  const [start, end] = scrollPoints[index];
  const fraction = (scrollLeft - start) / (end - start);
  return { index, fraction };
};
