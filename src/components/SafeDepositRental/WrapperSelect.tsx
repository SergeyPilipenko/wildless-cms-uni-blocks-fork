import { JSX } from '@redneckz/uni-jsx';
import { OptionProps, Select } from '../../ui-kit/Select/Select';
import { Currency } from '../ExchangeRateTile/CurrencyProps';

interface WrapperSelectProps {
  data: Record<string, any>[];
  fieldLabel: string;
  fieldValue?: string;
  selected: string;
  setSelected: (value: string) => void;
  label: string;
  placeholder?: string;
}

export const WrapperSelect = JSX<WrapperSelectProps>(
  ({ data, fieldLabel, fieldValue, selected, placeholder = '', setSelected, label }) => {
    const dataFormat: OptionProps[] = data
      .filter(Boolean)
      .map((_) => ({ key: _?.[fieldValue || fieldLabel], text: _?.[fieldLabel] }));
    const selectedObj = dataFormat.find((_) => _.key === selected);

    return (
      <Select
        options={dataFormat}
        label={label}
        placeholder={placeholder || selected}
        onChange={(_) => setSelected(_.key as Currency)}
        value={selectedObj}
      />
    );
  },
);
