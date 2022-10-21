import { JSX } from '@redneckz/uni-jsx';
import { InputRange } from '../../ui-kit/InputRange/InputRange';

const ITEMS = ['От 1 дня', 'До 365 дней'];
const MIN = 1;
const MAX = 365;

interface RentalPeriodProps {
  days: number;
  setDays: (value: number) => void;
}

export const RentalPeriod = JSX<RentalPeriodProps>(({ days, setDays }) => (
  <div className="mb-6">
    <span className="block text-m-light mb-[3px]">Срок аренды</span>
    <InputRange min={MIN} max={MAX} value={days} items={ITEMS} onChange={setDays} />
  </div>
));
