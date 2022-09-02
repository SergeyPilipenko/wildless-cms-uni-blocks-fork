import { context } from '../../setup-fixture';
import { CreditCalculator } from './CreditCalculator';
import type { CreditCalculatorTab } from './CreditCalculatorContent';

const TABS: CreditCalculatorTab[] = [
  {
    title: 'Кредит',
    description: 'Ставка от 6% до 7 лет',
    directoryName: 'credit-calculator-data',
    icon: { icon: 'CardIcon' },
  },
  {
    title: 'Кредит',
    description: 'Ставка от 4% до 7 лет',
    directoryName: 'credit-calculator-data1',
    icon: { icon: 'ChartSquareIcon' },
  },
  {
    title: 'Кредит',
    description: 'Ставка от 3% до 6 лет',
    directoryName: 'credit-calculator-data2',
    icon: { icon: 'DiscountShapeIcon' },
  },
];

export default {
  default: (
    <div className="container grid grid-cols-12">
      <CreditCalculator className="col-span-12" context={context} tabs={TABS} />
    </div>
  ),
};
