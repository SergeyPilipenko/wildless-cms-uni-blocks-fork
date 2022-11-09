import { Input } from '../../ui-kit/Input/Input';
import { Select } from '../../ui-kit/Select/Select';
import type { OptionProps } from '../../ui-kit/Select/Select';
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
  const ratesOptions: OptionProps[] = rates.map((_) => ({ key: _.code ?? '', text: _.code ?? '' }));
  const selectedValue: OptionProps = { key: selected, text: selected };

  return (
    <div className="relative flex">
      <Input
        className="shrink-0 h-14 pl-4 pt-4 pb-4 text-l w-full appearance-none mr-[-90px]"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={setValue}
      />
      {ratesOptions.length ? (
        <Select
          isBorder={false}
          onChange={(_) => setSelected(_.key as Currency)}
          options={ratesOptions}
          value={selectedValue}
        />
      ) : null}
    </div>
  );
}
