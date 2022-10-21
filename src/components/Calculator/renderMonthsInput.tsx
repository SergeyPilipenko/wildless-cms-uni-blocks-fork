import { InputRange } from '../../ui-kit/InputRange/InputRange';
import { clamp } from '../../utils/clamp';

const STEP_MONTHS = 1;

interface RenderMonthsInputParams {
  minMonths: number;
  maxMonths: number;
  monthsValue: number;
}

export function renderMonthsInput(title: string, params: RenderMonthsInputParams, callback) {
  const { minMonths, maxMonths, monthsValue } = params;
  const monthText = (month) => {
    const text = Number(month) % 10 === 1 ? 'месяца' : 'месяцев';

    return `${month} ${text}`;
  };

  return (
    <InputRange
      className="mt-7"
      title={title}
      items={[`От ${monthText(minMonths)}`, `До ${monthText(maxMonths)}`]}
      min={minMonths}
      max={maxMonths}
      step={STEP_MONTHS}
      value={clamp(monthsValue, minMonths, maxMonths)}
      onChange={callback}
    />
  );
}
