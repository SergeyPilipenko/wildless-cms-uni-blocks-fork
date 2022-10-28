// TEMP

import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import type { UniBlockProps } from '../../types';
import { CommonCalculatorProps, DepositCalculatorParams } from './CalculatorContent';
import { CalculatorValueBlock } from './CalculatorValueBlock';
import {
  DEFAULT_MAX_MONTHS,
  DEFAULT_MAX_SUM,
  DEFAULT_MIN_MONTHS,
  DEFAULT_MIN_SUM,
  DEFAULT_MONTHS,
  DEFAULT_SUM,
} from './constants';
import { Rate } from './Rate';
import { renderButtonSection } from './renderButtonSection';
import { renderMonthsInput } from './renderMonthsInput';
import { renderWantedSumInput } from './renderWantedSumInput';
import { renderPaymentTypeSelector } from './renderPaymentTypeSelector';
import { renderFootnote } from './renderFootnote';

export interface DepositCalculatorProp
  extends DepositCalculatorParams,
    CommonCalculatorProps,
    UniBlockProps {}

const EVERY_MONTH = 'everyMonth';
const AT_END_TERM = 'atEndTerm';

const depositTypeItems = [
  {
    id: EVERY_MONTH,
    text: 'Ежемесячно',
  },
  {
    id: AT_END_TERM,
    text: 'В конце срока',
  },
];

export const DepositCalculatorForm = JSX<DepositCalculatorProp>(
  ({ context, className = '', rate, buttons, footnote }) => {
    const [moneyValue, setMoneyValue] = useState(DEFAULT_SUM);
    const [monthsValue, setMonthsValue] = useState(DEFAULT_MONTHS);
    const [isEveryMonth, toggleIsEveryMonth] = useState(false);

    const income = 948841;
    const finallySum = 1218841;

    return (
      <section className={className}>
        <div className="w-[468px]">
          {renderWantedSumInput(
            'Сумма вклада, ₽',
            {
              moneyValue,
              minSum: DEFAULT_MIN_SUM,
              maxSum: DEFAULT_MAX_SUM,
            },
            setMoneyValue,
          )}
          {renderMonthsInput(
            'Срок вклада, месяцев',
            {
              minMonths: DEFAULT_MIN_MONTHS,
              maxMonths: DEFAULT_MAX_MONTHS,
              monthsValue,
            },
            setMonthsValue,
          )}
        </div>
        <Rate rate={rate || 1} rateBlockClassName="tracking-[-25px]" unit="%" />
        <div className="w-full max-w-[350px]">
          {income ? (
            <CalculatorValueBlock title="Доход по вкладу" value={income} postfix="₽" prefix="+" />
          ) : null}
          {finallySum ? (
            <CalculatorValueBlock title="Сумма в конце срока" value={finallySum} postfix="₽" />
          ) : null}
          {renderPaymentTypeSelector(context, {
            items: depositTypeItems,
            checkedItem: isEveryMonth ? EVERY_MONTH : AT_END_TERM,
            onChange: (text: string) => toggleIsEveryMonth(text === EVERY_MONTH),
          })}
          {renderButtonSection(context, buttons)}
          {renderFootnote(footnote)}
        </div>
      </section>
    );
  },
);
