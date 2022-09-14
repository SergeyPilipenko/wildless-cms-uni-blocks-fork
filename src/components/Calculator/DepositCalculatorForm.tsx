import { JSX } from '@redneckz/uni-jsx';
import { useCreditCalculatorData } from '../../hooks/useCreditCalculatorData';
import type { UniBlockProps } from '../../types';
import { CalculatorValueBlock } from './CalculatorValueBlock';
import { DEFAULT_MAX_MONTHS, DEFAULT_MIN_MONTHS } from './constants';
import { renderWantedSumInput } from './renderWantedSumInput';
import { getCalculatorParams } from './getCalculatorParams';
import { getDefaultSum } from './getDefaultSum';
import { getDefaultMonths } from './getDefaultMonths';
import { renderMonthsInput } from './renderMonthsInput';
import { renderButtonSection } from './renderButtonSection';
import { renderRate } from './renderRate';
import { CommonCalculatorProps, DepositCalculatorParams } from './CalculatorContent';

export interface DepositCalculatorProp
  extends DepositCalculatorParams,
    CommonCalculatorProps,
    UniBlockProps {}

export const DepositCalculatorForm = JSX<DepositCalculatorProp>(
  ({ context, className = '', buttons, rate, minSum, maxSum, minMonths, maxMonths }) => {
    const [moneyValue, setMoneyValue] = context.useState<number | undefined>(undefined);
    const [monthsValue, setMonthsValue] = context.useState<number | undefined>(undefined);
    const tableRows = useCreditCalculatorData(context.useAsyncData, 'directoryName').rows;
    const calculatorParams = getCalculatorParams({ tableRows, isAnnuity: false });

    const defaultSum = getDefaultSum(calculatorParams);
    const defaultMonths = getDefaultMonths(calculatorParams);

    const income = 948841;
    const finallySum = 1218841;

    return (
      <section className={className}>
        <div className="w-[468px]">
          {renderWantedSumInput({
            title: 'Сумма вклада, ₽',
            calculatorParams: { minSum, maxSum },
            moneyValue,
            defaultSum,
            setMoneyValue,
          })}
          {renderMonthsInput({
            title: 'Срок вклада, месяцев',
            minMonths: minMonths || DEFAULT_MIN_MONTHS,
            maxMonths: maxMonths || DEFAULT_MAX_MONTHS,
            monthsValue,
            defaultMonths,
            setMonthsValue,
          })}
        </div>
        <div>
          {rate
            ? renderRate({ rate: rate, title: 'Ставка', sup: '%', className: 'tracking-[-25px]' })
            : null}
        </div>
        <div className="w-[351px]">
          {income ? (
            <CalculatorValueBlock title="Доход по вкладу" value={income} postfix="₽" prefix="+" />
          ) : null}
          {finallySum ? (
            <CalculatorValueBlock title="Сумма в конце срока" value={finallySum} postfix="₽" />
          ) : null}
          {renderButtonSection(context, buttons)}
        </div>
      </section>
    );
  },
);
