// TEMP
import { InputRange } from '../../ui-kit/InputRange/InputRange';
import { addSpacesBetweenNumbers } from '../../utils/addSpacesBetweenNumbers';
import { DEFAULT_MAX_SUM, DEFAULT_MIN_SUM } from './constants';

const STEP_MONEY = 1000;

interface RenderWantedSumInputParams {
  moneyValue: number;
}

export function renderInitialFeeInput(title, props: RenderWantedSumInputParams, callback) {
  const { moneyValue } = props;

  const minSum = DEFAULT_MIN_SUM;
  const maxSum = DEFAULT_MAX_SUM;

  return (
    <InputRange
      className="mt-6"
      title={title}
      items={[
        `От ${addSpacesBetweenNumbers(minSum)} рублей`,
        `До ${addSpacesBetweenNumbers(maxSum)} рублей`,
      ]}
      min={minSum}
      max={maxSum}
      step={STEP_MONEY}
      value={moneyValue}
      onChange={callback}
    />
  );
}
