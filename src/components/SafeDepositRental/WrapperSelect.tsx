import { JSX } from '@redneckz/uni-jsx';
import { Select } from '../../ui-kit/Select/Select';
import { SelectOption } from '../../ui-kit/Select/SelectOption';

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
  ({
    data,
    fieldLabel,
    fieldValue,
    selected,
    placeholder = 'Выберите значение',
    setSelected,
    label,
  }) => {
    return (
      <div>
        <span className="block text-m-light mb-2">{label}</span>
        <Select
          className={`h-14 border border-gray p-4 rounded-md text-s w-full cursor-pointer ${
            !selected ? 'text-secondary-text' : ''
          }`}
          value={selected}
          onChange={(_) => setSelected(_)}
        >
          <SelectOption value="">{placeholder}</SelectOption>
          {data.map((_, i) => (
            <SelectOption key={String(i)} value={_?.[fieldValue || fieldLabel]}>
              {_?.[fieldLabel]}
            </SelectOption>
          ))}
        </Select>
      </div>
    );
  },
);
