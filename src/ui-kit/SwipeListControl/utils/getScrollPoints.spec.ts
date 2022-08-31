import { getScrollPoints } from './getScrollPoints';

const props = {
  gap: 14,
  padding: 16,
  clientWidth: 500,
  scrollWidth: 1914,
  childElementCount: 4,
  itemWidth: 460, // clientWidth - 1 * padding - gap = visible 10px of adjacent element
};

// pre-baked array containing accurate [start, end] boundary scrollLeft values for scrollableElements
const scrollPoints: [number, number][] = [
  [0, 470],
  [470, 944],
  [944, 1414],
  [1414, 1914],
];

const twoItemsScrollPointsProps = {
  gap: 14,
  padding: 16,
  clientWidth: 414,
  scrollWidth: 794,
  childElementCount: 2,
  itemWidth: 380,
};

const twoItemsScrollPoints: [number, number][] = [
  [0, 380],
  [380, 794],
];

describe('getScrollPoints', () => {
  it('should return array containing scroll breakpoints delimiting each child', () => {
    expect(getScrollPoints(props)).toEqual(scrollPoints);
  });

  it('should correctly handle case with 2 items in container', () => {
    expect(getScrollPoints(twoItemsScrollPointsProps)).toEqual(twoItemsScrollPoints);
  });
});
