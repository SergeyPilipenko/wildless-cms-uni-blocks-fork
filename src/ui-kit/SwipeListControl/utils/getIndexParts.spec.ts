import { getIndexParts } from './getIndexParts';

// pre-baked array containing [start, end] boundary scrollLeft values for scrollableElements
const scrollPoints: [number, number][] = [
  [0, 100],
  [100, 200],
];

describe('getIndexParts', () => {
  it("should return index and it's decimal part if scrollLeft lies within given intervals, right boundary non-inclusive", () => {
    expect(getIndexParts(0, scrollPoints)).toEqual({ index: 0, fraction: 0 });
    expect(getIndexParts(199, scrollPoints)).toEqual({ index: 1, fraction: 0.99 });
  });

  it('should return index equal -1 and fraction equal 0 if scrollLeft is outside given intervals', () => {
    expect(getIndexParts(-1, scrollPoints)).toEqual({ index: -1, fraction: 0 });
    expect(getIndexParts(200, scrollPoints)).toEqual({ index: -1, fraction: 0 });
  });
});
