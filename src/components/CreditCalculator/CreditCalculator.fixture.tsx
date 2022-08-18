import { context } from '../../setup-fixture';
import { CreditCalculator } from './CreditCalculator';

export default {
  default: (
    <div className="container grid grid-cols-12">
      <CreditCalculator
        className="col-span-12"
        context={context}
        directoryName="credit-calculator-data"
      />
    </div>
  ),
};
