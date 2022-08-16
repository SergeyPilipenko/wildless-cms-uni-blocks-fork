import { JSX } from '@redneckz/uni-jsx';
import { Button } from '../../ui-kit/Button/Button';
import { Input } from '../../ui-kit/Input/Input';
import { Select } from '../../ui-kit/Select/Select';
import { SelectOption } from '../../ui-kit/Select/SelectOption';
import type { ExchangeCurrencyItem } from './ExchangeRateTileContent';

export interface ExchangeCurrencyCalculatorProps {
  exchangeCurrencyItems: ExchangeCurrencyItem[];
  codes: string[];
  className?: string;
}

export const ExchangeCurrencyCalculator = JSX<ExchangeCurrencyCalculatorProps>(
  ({ codes, className = '' }) => {
    return (
      <div className={`grid gap-3.5 ${className}`}>
        {renderInput('Хочу продать', codes)}
        {renderInput('Получу', codes)}
        <Button className="box-border mt-3.5 py-3 h-12 w-44" version="primary" href="#">
          Купить валюту
        </Button>
      </div>
    );
  },
);

function renderInput(placeholder: string, codes: string[]) {
  return (
    <div className="flex items-center">
      <Input
        className="h-10 border pl-2.5 rounded-md text-m-sm w-full appearance-none"
        type="number"
        placeholder={`${placeholder}`}
      />
      {codes.length ? (
        <Select className="h-9 -translate-x-16">
          {codes.map((code, i) => (
            <SelectOption key={String(i)} value={code}>
              {code}
            </SelectOption>
          ))}
        </Select>
      ) : null}
    </div>
  );
}
