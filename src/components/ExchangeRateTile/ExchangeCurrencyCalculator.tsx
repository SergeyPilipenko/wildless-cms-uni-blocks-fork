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
        {renderInput('Получу', codes, 'USD')}
        <Button className="box-border mt-3.5 py-3 h-12 w-full" version="primary" href="#">
          Купить валюту
        </Button>
      </div>
    );
  },
);

function renderInput(placeholder: string, codes: string[], selected?: string) {
  return (
    <div className="relative flex items-center">
      <Input
        className="h-10 border pl-4 pt-[7px] pb-[7px] rounded-md text-m-sm w-full appearance-none -mr-12"
        type="number"
        placeholder={`${placeholder}`}
      />
      {codes.length ? (
        <Select className="h-9 -translate-x-4">
          {codes.map((code, i) => (
            <SelectOption key={String(i)} value={code} selected={code === selected}>
              {code}
            </SelectOption>
          ))}
        </Select>
      ) : null}
    </div>
  );
}
