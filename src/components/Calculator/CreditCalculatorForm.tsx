import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import type { UniBlockProps } from '../../model/JSXBlock';
import { Checkbox } from '../../ui-kit/Checkbox/Checkbox';
import { CommonCalculatorProps } from './CalculatorContent';
import { CalculatorValueBlock } from './CalculatorValueBlock';
import { DEFAULT_MONTHS, DEFAULT_SUM } from './constants';
import { Rate } from './Rate';
import { renderButtonSection } from './renderButtonSection';
import { renderFootnote } from './renderFootnote';
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
  ({ context, className = '', sourceBookDir, buttons, footnote }) => {
    const [isAnnuity, toggleIsAnnuity] = useState(false);
    const [isInsurance, toggleIsInsurance] = useState(true);
    const [isSalaryClient, toggleIsSalaryClient] = useState(false);
    const [isStateEmployee, toggleIsStateEmployee] = useState(false);
    const [moneyValue, setMoneyValue] = useState(DEFAULT_SUM);
    const [monthsValue, setMonthsValue] = useState(DEFAULT_MONTHS);
    const userInputParams = {
      isAnnuity,
      isInsurance,
      isSalaryClient,
      isStateEmployee,
      moneyValue,
      monthsValue,
    };
    const calculatorParams = useCreditCalculatorParams(userInputParams, sourceBookDir);

    return (
      <section className={className}>
        <div className="w-[468px]">
          {renderWantedSumInput(
            'Сумма кредита, ₽',
            { ...calculatorParams, step: 500 },
            setMoneyValue,
          )}
          {renderMonthsInput('Срок кредита, месяцев', calculatorParams, setMonthsValue)}
          <div className="mt-7">
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
        <div className="w-full max-w-[350px]">
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
          {renderFootnote(footnote)}
        </div>
      </section>
    );
  },
);
