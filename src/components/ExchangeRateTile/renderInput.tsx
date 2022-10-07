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
        className="shrink-0 h-13 border pl-4 pt-4 pb-4 rounded-md text-l w-full appearance-none -mr-12"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={setValue}
      />
      {rates.length ? (
        <Select
          className="shrink-0 w-20 h-9 -translate-x-8 bg-transparent"
          value={selected}
          onChange={(_) => setSelected(_ as Currency)}
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
