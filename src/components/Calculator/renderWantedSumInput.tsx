import { InputRange } from '../../ui-kit/InputRange/InputRange';
import type { InputRangeProps } from '../../ui-kit/InputRange/InputRangeProps';
import { addSpacesBetweenNumbers } from '../../utils/addSpacesBetweenNumbers';
import { DEFAULT_MAX_SUM, DEFAULT_MIN_SUM } from './constants';
import type { CalculatorParams } from './CalculatorContent';

const STEP_MONEY = 1000;

interface RenderWantedSumInputProps {
  className?: string;
  title: string;
  isShowItems?: boolean;
  calculatorParams: CalculatorParams;
  moneyValue: number | undefined;
  defaultSum: number;
  setMoneyValue: InputRangeProps['onChange'];
}

export function renderWantedSumInput(props: RenderWantedSumInputProps) {
  const {
    title,
    className = '',
    calculatorParams,
    moneyValue,
    defaultSum,
    setMoneyValue,
    isShowItems = true,
  } = props;

  const minSum = calculatorParams?.minSum || DEFAULT_MIN_SUM;
  const maxSum = calculatorParams?.maxSum || DEFAULT_MAX_SUM;
  const items = [
    `От ${addSpacesBetweenNumbers(minSum)} ₽`,
    `До ${addSpacesBetweenNumbers(maxSum)} ₽`,
  ];

  return (
    <InputRange
      className={className}
      title={title}
      items={isShowItems ? items : []}
      min={minSum}
      max={maxSum}
      step={STEP_MONEY}
      value={moneyValue || defaultSum}
      onChange={setMoneyValue}
    />
  );
}
