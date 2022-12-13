import '../../react/setup-fixture';
import { Calculator } from './Calculator';

import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import type {
  BonusCalculatorParamsDef,
  CreditCalculatorParamsDef,
  DepositCalculatorParamsDef,
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

const footnote =
  'Расчёт является предварительным. Точные условия будут предоставлены в отделении Банка. ';

const CREDIT_CALCULATOR_BLOCK: CreditCalculatorParamsDef = {
  calcType: 'CreditCalculatorForm',
  buttons: buttons,
  footnote,
};

const DEPOSIT_CALCULATOR_BLOCK: DepositCalculatorParamsDef = {
  calcType: 'DepositCalculatorForm',
  minSum: 50000,
  maxSum: 5000000,
  minMonths: 2,
  maxMonths: 120,
  rate: 5.9,
  buttons: buttons,
  footnote,
};

const BONUS_CALCULATOR_BLOCK: BonusCalculatorParamsDef = {
  title: 'Обменивайте баллы на путешествия',
  calcType: 'BonusCalculatorForm',
  buttons: buttons,
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Calculator
        className="col-span-12"
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
