import { SwipeListControl } from './SwipeListControl';
import { mobileContext } from '../../setup-fixture';

const children = new Array(4).fill(0).map((_, i) => (
  <div key={String(i)} className="border border-main-stroke rounded-md text-center h-12">
    {`Element #${i}`}
  </div>
));

export default {
  default: (
    <div className="container px-4 py-5 grid-cols-12 bg-white">
      <SwipeListControl context={mobileContext}>{children}</SwipeListControl>
    </div>
  ),
};
