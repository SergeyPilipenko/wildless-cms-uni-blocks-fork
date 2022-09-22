import { mobileContext } from '../../react/setup-fixture';
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
      <SwipeListControl context={mobileContext}>{generateChildren(5)}</SwipeListControl>
    </div>
  ),
  'w/o dots': (
    <div className="px-4 py-5 bg-white">
      <SwipeListControl context={mobileContext} showDots={false}>
        {generateChildren(5)}
      </SwipeListControl>
    </div>
  ),
  '1 element': (
    <div className="px-4 py-5 bg-white">
      <SwipeListControl context={mobileContext}>{generateChildren(1)}</SwipeListControl>
    </div>
  ),
  '2 elements': (
    <div className="px-4 py-5 bg-white">
      <SwipeListControl context={mobileContext}>{generateChildren(2)}</SwipeListControl>
    </div>
  ),
};
