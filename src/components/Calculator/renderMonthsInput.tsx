import { InputRange } from '../../ui-kit/InputRange/InputRange';
import type { InputRangeProps } from '../../ui-kit/InputRange/InputRangeProps';

const STEP_MONTHS = 1;

interface RenderMonthsInputProps {
  title: string;
  minMonths: number;
  maxMonths: number;
  monthsValue: number | undefined;
  defaultMonths: number;
  setMonthsValue: InputRangeProps['onChange'];
}

export function renderMonthsInput(props: RenderMonthsInputProps) {
  const { title, minMonths, maxMonths, monthsValue, defaultMonths, setMonthsValue } = props;
  const monthText = (month) => {
    const text = Number(month) % 10 === 1 ? 'месяца' : 'месяцев';
    return `${month} ${text}`;
  };

  return (
    <InputRange
      className="mt-6"
      title={title}
      items={[`От ${monthText(minMonths)}`, `До ${monthText(maxMonths)}`]}
      min={minMonths}
      max={maxMonths}
      step={STEP_MONTHS}
      value={monthsValue || defaultMonths}
      onChange={setMonthsValue}
    />
  );
}
