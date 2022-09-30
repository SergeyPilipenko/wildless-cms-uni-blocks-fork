import { InputRange } from '../../ui-kit/InputRange/InputRange';
import { addSpacesBetweenNumbers } from '../../utils/addSpacesBetweenNumbers';
import { clamp } from '../../utils/clamp';

const DEFAULT_MONEY_STEP = 1000;

interface RenderWantedSumParams {
  minSum: number;
  maxSum: number;
  moneyValue: number;
  className?: string;
  step?: number;
  isShowItems?: boolean;
}

export function renderWantedSumInput(title: string, params: RenderWantedSumParams, callback) {
  const { moneyValue, minSum, maxSum, step = DEFAULT_MONEY_STEP, isShowItems = true } = params;

  const items = [
    `От ${addSpacesBetweenNumbers(minSum)} ₽`,
    `До ${addSpacesBetweenNumbers(maxSum)} ₽`,
  ];

  return (
    <InputRange
      title={title}
      items={isShowItems ? items : []}
      min={minSum}
      max={maxSum}
      step={step}
      value={clamp(moneyValue, minSum, maxSum)}
      onChange={callback}
    />
  );
}
