import '../../react/setup-fixture';
import { SwipeListControl } from './SwipeListControl';

const generateChildren = (count: number) =>
  new Array(count).fill(0).map((_, i) => (
    <div key={String(i)} className="border border-main-stroke rounded-md text-center h-12">
      {`Element #${i}`}
    </div>
  ));

export default {
  default: (
    <div className="px-4 py-5 bg-white">
      <SwipeListControl>{generateChildren(5)}</SwipeListControl>
    </div>
  ),
  'w/o dots': (
    <div className="px-4 py-5 bg-white">
      <SwipeListControl showDots={false}>{generateChildren(5)}</SwipeListControl>
    </div>
  ),
  '1 element': (
    <div className="px-4 py-5 bg-white">
      <SwipeListControl>{generateChildren(1)}</SwipeListControl>
    </div>
  ),
  '2 elements': (
    <div className="px-4 py-5 bg-white">
      <SwipeListControl>{generateChildren(2)}</SwipeListControl>
    </div>
  ),
};
