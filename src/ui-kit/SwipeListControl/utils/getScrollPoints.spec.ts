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

describe('getScrollPoints', () => {
  it('should return array containing scroll breakpoints delimiting each child', () => {
    expect(getScrollPoints(props)).toEqual(scrollPoints);
  });
});
