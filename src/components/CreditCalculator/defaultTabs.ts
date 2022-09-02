import type { CreditCalculatorTab } from './CreditCalculatorContent';

export const DEFAULT_TABS: CreditCalculatorTab[] = [
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
