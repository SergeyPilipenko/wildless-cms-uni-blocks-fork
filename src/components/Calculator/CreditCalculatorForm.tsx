import { JSX } from '@redneckz/uni-jsx';
import { useCreditCalculatorData } from '../../hooks/useCreditCalculatorData';
import type { UniBlockProps } from '../../types';
import { Checkbox } from '../../ui-kit/Checkbox/Checkbox';
import { CalculatorValueBlock } from './CalculatorValueBlock';
import { DEFAULT_MAX_MONTHS, DEFAULT_MIN_MONTHS } from './constants';
import { renderWantedSumInput } from './renderWantedSumInput';
import { getCreditRate } from './getCreditRate';
import { getCalculatorParams } from './getCalculatorParams';
import { getDefaultSum } from './getDefaultSum';
import { getDefaultMonths } from './getDefaultMonths';
import { getMonthlyPayment } from './getMonthlyPayment';
import { renderMonthsInput } from './renderMonthsInput';
import { renderButtonSection } from './renderButtonSection';
import { renderRate } from './renderRate';
import { CommonCalculatorProps, CreditCalculatorParams } from './CalculatorContent';

const DEFAULT_PAYMENT_TYPE = 'annuity';

export interface CreditCalculatorProp
  extends CreditCalculatorParams,
    CommonCalculatorProps,
    UniBlockProps {}

export const CreditCalculatorForm = JSX<CreditCalculatorProp>(
  ({ context, className = '', buttons }) => {
    const [moneyValue, setMoneyValue] = context.useState<number | undefined>(undefined);
    const [monthsValue, setMonthsValue] = context.useState<number | undefined>(undefined);
    const [isAnnuity, toggleIsAnnuity] = context.useState(false);
    const [isBudgetary, toggleIsBudgetary] = context.useState(false);
    const [isInsurance, toggleIsInsurance] = context.useState(false);
    const tableRows = useCreditCalculatorData(context.useAsyncData, 'directoryName').rows;
    const calculatorParams = getCalculatorParams({ tableRows, isAnnuity: isAnnuity });

    const defaultSum = getDefaultSum(calculatorParams);
    const defaultMonths = getDefaultMonths(calculatorParams);

    const minMonths = calculatorParams?.minMonths || DEFAULT_MIN_MONTHS;
    const maxMonths = calculatorParams?.maxMonths || DEFAULT_MAX_MONTHS;

    const rate = getCreditRate({ calculatorParams, isInsurance: isInsurance });

    const monthlyPayment = getMonthlyPayment({
      calculatorParams,
      paymentType: DEFAULT_PAYMENT_TYPE,
      rate,
      sum: moneyValue || defaultSum,
      months: monthsValue || defaultMonths,
    });

    const title = 'Сумма кредита, ₽';

    return (
      <section className={className}>
        <div className="w-[468px]">
          {renderWantedSumInput({ title, calculatorParams, moneyValue, defaultSum, setMoneyValue })}
          {renderMonthsInput({
            title: 'Сумма кредита, ₽',
            minMonths,
            maxMonths,
            monthsValue,
            defaultMonths,
            setMonthsValue,
          })}
          <div className="pt-7">
            <Checkbox
              text="Получаю зарплату на счёт в Россельхозбанке"
              checked={isAnnuity}
              onChange={toggleIsAnnuity}
            />
            <Checkbox
              className="mt-3"
              text="Работаю в бюджетной организации"
              checked={isBudgetary}
              onChange={toggleIsBudgetary}
            />
            <Checkbox
              className="mt-3"
              text="Комплексная страховая защита"
              checked={isInsurance}
              onChange={toggleIsInsurance}
            />
          </div>
        </div>
        <div>
          {rate
            ? renderRate({ rate: rate, title: 'Ставка', sup: '%', className: 'tracking-[-25px]' })
            : null}
        </div>
        <div className="w-[351px]">
          {monthlyPayment ? (
            <CalculatorValueBlock title="Ежемесячный платеж" value={monthlyPayment} postfix="₽" />
          ) : null}
          {renderButtonSection(context, buttons)}
        </div>
      </section>
    );
  },
);
