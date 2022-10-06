import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Checkbox } from '../../ui-kit/Checkbox/Checkbox';
import { CommonCalculatorProps } from './CalculatorContent';
import { CalculatorValueBlock } from './CalculatorValueBlock';
import { DEFAULT_MONTHS, DEFAULT_SUM } from './constants';
import { Rate } from './Rate';
import { renderButtonSection } from './renderButtonSection';
import { renderMonthsInput } from './renderMonthsInput';
import { renderPaymentTypeSelector } from './renderPaymentTypeSelector';
import { renderWantedSumInput } from './renderWantedSumInput';
import { useCreditCalculatorParams } from './useCreditCalculatorParams';

export const ANNUITY = 'annuity';
export const DIFFERENTIAL = 'differential';

const paymentTypeItems = [
  {
    id: ANNUITY,
    text: 'Аннуитетный',
  },
  {
    id: DIFFERENTIAL,
    text: 'Дифференцированный',
  },
];

export interface CreditCalculatorProp extends CommonCalculatorProps, UniBlockProps {}

export const CreditCalculatorForm = JSX<CreditCalculatorProp>(
  ({ context, className = '', sourceBookDir, buttons }) => {
    const [isAnnuity, toggleIsAnnuity] = context.useState(false);
    const [isInsurance, toggleIsInsurance] = context.useState(true);
    const [isSalaryClient, toggleIsSalaryClient] = context.useState(false);
    const [isStateEmployee, toggleIsStateEmployee] = context.useState(false);
    const [moneyValue, setMoneyValue] = context.useState(DEFAULT_SUM);
    const [monthsValue, setMonthsValue] = context.useState(DEFAULT_MONTHS);
    const userInputParams = {
      isAnnuity,
      isInsurance,
      isSalaryClient,
      isStateEmployee,
      moneyValue,
      monthsValue,
    };
    const calculatorParams = useCreditCalculatorParams(context, userInputParams, sourceBookDir);

    return (
      <section className={className}>
        <div className="w-[468px]">
          {renderWantedSumInput(
            'Сумма кредита, ₽',
            { ...calculatorParams, step: 500 },
            setMoneyValue,
          )}
          {renderMonthsInput('Срок кредита, месяцев', calculatorParams, setMonthsValue)}
          <div className="pt-7">
            <Checkbox
              text="Получаю зарплату на счёт в Россельхозбанке"
              checked={isSalaryClient}
              onChange={toggleIsSalaryClient}
            />
            <Checkbox
              className="mt-3"
              text="Работаю в бюджетной организации"
              checked={isStateEmployee}
              onChange={toggleIsStateEmployee}
            />
            <Checkbox
              className="mt-3"
              text="Комплексная страховая защита"
              checked={isInsurance}
              onChange={toggleIsInsurance}
            />
          </div>
        </div>
        <Rate
          title="Ставка"
          rate={calculatorParams.finalRate}
          rateBlockClassName="tracking-[-25px]"
          unit="%"
        />
        <div className="w-[351px]">
          <CalculatorValueBlock
            title={isAnnuity ? 'Ежемесячный платеж' : 'Платёж в первый месяц'}
            value={calculatorParams.monthlyPayment}
            postfix="₽"
          />
          {renderPaymentTypeSelector(context, {
            items: paymentTypeItems,
            checkedItem: isAnnuity ? ANNUITY : DIFFERENTIAL,
            onChange: (text: string) => toggleIsAnnuity(text === ANNUITY),
          })}
          {renderButtonSection(context, buttons)}
        </div>
      </section>
    );
  },
);
