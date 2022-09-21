import { Input } from '../../ui-kit/Input/Input';
import { Select } from '../../ui-kit/Select/Select';
import { SelectOption } from '../../ui-kit/Select/SelectOption';
import type { Currency } from './CurrencyProps';
import type { ExchangeCurrencyItem } from './ExchangeCurrencyCalculator';

interface InputProps {
  placeholder: string;
  rates: ExchangeCurrencyItem[];
  selected: string;
  setSelected: (value: Currency) => void;
  value: string;
  setValue: (value: string) => void;
}

export function renderInput(props: InputProps) {
  const { placeholder, rates, selected, value, setValue, setSelected } = props;

  return (
    <div className="relative flex items-center">
      <Input
        className="h-10 border pl-4 pt-[7px] pb-[7px] rounded-md text-m-sm w-full appearance-none -mr-12"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={setValue}
      />
      {rates.length ? (
        <Select
          className="h-9 -translate-x-4"
          value={selected}
          onChange={(value) => setSelected(value as Currency)}
        >
          {rates.map((_, i) => (
            <SelectOption key={String(i)} value={_.code}>
              {_.code}
            </SelectOption>
          ))}
        </Select>
      ) : null}
    </div>
  );
}
