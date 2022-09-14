import { InputRange } from '../../ui-kit/InputRange/InputRange';
import type { InputRangeProps } from '../../ui-kit/InputRange/InputRangeProps';
import { addSpacesBetweenNumbers } from '../../utils/addSpacesBetweenNumbers';
import { DEFAULT_MAX_SUM, DEFAULT_MIN_SUM } from './constants';
import type { CalculatorParams } from './CalculatorContent';

const STEP_MONEY = 1000;

interface RenderWantedSumInputProps {
  calculatorParams: CalculatorParams;
  moneyValue: number | undefined;
  defaultSum: number;
  setMoneyValue: InputRangeProps['onChange'];
}

export function renderInitialFeeInput(props: RenderWantedSumInputProps) {
  const { calculatorParams, moneyValue, defaultSum, setMoneyValue } = props;

  const minSum = calculatorParams?.minSum || DEFAULT_MIN_SUM;
  const maxSum = calculatorParams?.maxSum || DEFAULT_MAX_SUM;

  return (
    <InputRange
      className="mt-6"
      title="Первоначальный взнос, ₽ "
      items={[
        `От ${addSpacesBetweenNumbers(minSum)} рублей`,
        `До ${addSpacesBetweenNumbers(maxSum)} рублей`,
      ]}
      min={minSum}
      max={maxSum}
      step={STEP_MONEY}
      value={moneyValue || defaultSum}
      onChange={setMoneyValue}
    />
  );
}
