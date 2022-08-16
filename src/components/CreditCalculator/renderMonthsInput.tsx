import { InputRange } from '../../ui-kit/InputRange/InputRange';
import type { InputRangeProps } from '../../ui-kit/InputRange/InputRangeProps';

const STEP_MONTHS = 1;

interface RenderMonthsInputProps {
  minMonths: number;
  maxMonths: number;
  monthsValue: number | undefined;
  defaultMonths: number;
  setMonthsValue: InputRangeProps['onChange'];
}

export function renderMonthsInput(props: RenderMonthsInputProps) {
  const { minMonths, maxMonths, monthsValue, defaultMonths, setMonthsValue } = props;

  return (
    <InputRange
      className="mt-[23px]"
      title="Срок кредита, месяцев"
      items={['Или выберите из предложенных вариантов ниже']}
      min={minMonths}
      max={maxMonths}
      step={STEP_MONTHS}
      value={monthsValue || defaultMonths}
      onChange={setMonthsValue}
    />
  );
}
