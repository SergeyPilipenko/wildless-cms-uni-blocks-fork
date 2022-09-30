import { context } from '../../react/setup-fixture';
import { Calculator } from './Calculator';

import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import type {
  BonusCalculatorParamsDef,
  CreditCalculatorParamsDef,
  DepositCalculatorParamsDef,
  MortgageCalculatorParamsDef,
} from './CalculatorContent';

const buttons: ButtonWithIconProps[] = [
  {
    href: 'https://rshb.ru',
    text: 'Отправить заявку',
    target: '_blank',
    version: 'primary',
  },
  {
    href: 'https://rshb.ru',
    text: 'Подробные условия',
    target: '_blank',
    version: 'secondary',
  },
];

const CREDIT_CALCULATOR_BLOCK: CreditCalculatorParamsDef = {
  calcType: 'CreditCalculatorForm',
  buttons: buttons,
};

const MORTGAGE_CALCULATOR_BLOCK: MortgageCalculatorParamsDef = {
  calcType: 'MortgageCalculatorForm',
  isAnnuity: true,
  minSum: 15000,
  maxSum: 7500000,
  minMonths: 2,
  maxMonths: 120,
  rateWithInsurance: 4,
  rateWithoutInsurance: 5.5,
  buttons: buttons,
};

const DEPOSIT_CALCULATOR_BLOCK: DepositCalculatorParamsDef = {
  calcType: 'DepositCalculatorForm',
  minSum: 50000,
  maxSum: 5000000,
  minMonths: 2,
  maxMonths: 120,
  rate: 5.9,
  buttons: buttons,
};

const BONUS_CALCULATOR_BLOCK: BonusCalculatorParamsDef = {
  calcType: 'BonusCalculatorForm',
  buttons: buttons,
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Calculator
        className="col-span-12"
        context={context}
        calculatorTabs={[
          {
            nav: {
              title: 'Кредит на любые цели',
              description: 'Ставка от 5,5% до 5 лет',
              icon: { icon: 'CalendarIcon' },
            },
            calculatorBlock: CREDIT_CALCULATOR_BLOCK,
          },
          {
            nav: {
              title: 'Ипотека с господдержкой',
              description: 'Ставка от 6%, срок до 30 лет',
              icon: { icon: 'WalletAdd2Icon' },
            },
            calculatorBlock: MORTGAGE_CALCULATOR_BLOCK,
          },
          {
            nav: {
              title: 'Вклад «Доходный»',
              description: 'Ставка до 7% до 15 лет',
              icon: { icon: 'SafeIcon' },
            },
            calculatorBlock: DEPOSIT_CALCULATOR_BLOCK,
          },
          {
            nav: {
              title: 'Обменивайте баллы на путешествия',
              icon: { icon: 'PercentageSquareIcon' },
            },
            calculatorBlock: BONUS_CALCULATOR_BLOCK,
          },
        ]}
      />
    </div>
  ),
  single: (
    <div className="container grid grid-cols-12">
      <Calculator
        className="col-span-12"
        context={context}
        calculatorTabs={[
          {
            nav: {
              title: 'Кредит на любые цели',
              description: 'Ставка от 5,5% до 5 лет',
              icon: { icon: 'CalendarIcon' },
            },
            calculatorBlock: CREDIT_CALCULATOR_BLOCK,
          },
        ]}
      />
    </div>
  ),
};
