// TEMP
import { InputRange } from '../../ui-kit/InputRange/InputRange';
import { addSpacesBetweenNumbers } from '../../utils/addSpacesBetweenNumbers';
import { DEFAULT_MAX_SUM, DEFAULT_MIN_SUM } from './constants';

const STEP_MONEY = 1000;

interface RenderRealEstateValueInputProps {
  moneyValue: number;
}

export function renderRealEstateValue(
  props: RenderRealEstateValueInputProps,
  title?: string,
  callback?: (value: number) => void,
) {
  const { moneyValue } = props;

  const minSum = DEFAULT_MIN_SUM;
  const maxSum = DEFAULT_MAX_SUM;

  return (
    <InputRange
      title={title}
      items={[`От ${addSpacesBetweenNumbers(minSum)} ₽`, `До ${addSpacesBetweenNumbers(maxSum)} ₽`]}
      min={minSum}
      max={maxSum}
      step={STEP_MONEY}
      value={moneyValue}
      onChange={callback}
    />
  );
}
