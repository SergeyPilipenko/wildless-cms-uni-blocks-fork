import { context } from '../../setup-fixture';

import { ExchangeRateTile } from './ExchangeRateTile';

export default {
  default: (
    <div className="container grid grid-cols-12">
      <ExchangeRateTile context={context} className="col-span-12" />
    </div>
  ),
  exchange: (
    <div className="container grid grid-cols-12">
      <ExchangeRateTile context={context} className="col-span-12" />
    </div>
  ),
};
