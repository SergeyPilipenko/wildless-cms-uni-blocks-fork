import { JSX } from '@redneckz/uni-jsx';
import { clamp } from '../../utils/clamp';
import type { CurrencyInputProps } from './CurrencyInputProps';

export const CurrencyInput = JSX<CurrencyInputProps>(
  ({
    className = '',
    label,
    onChange,
    value = '',
    minValue = 0,
    maxValue = 300000,
    ...inputProps
  }) => {
    const handleChange = (e: any) => {
      if (!onChange) {
        return;
      }

      const newValue =
        e.target.value === '' ? '' : String(clamp(e.target.value as number, minValue, maxValue));

      onChange(newValue);
    };

    return (
      <div className={className}>
        {label ? <label className="block text-m-light mb-2">{label}</label> : null}
        <div className="h-[56px] relative flex items-center">
          <input
            type="number"
            className={
              'text-l pl-4 pr-8 w-full h-full rounded-md border border-solid border-main-stroke hover:border-primary-hover active:border-primary-text focus:border-primary-text'
            }
            onChange={handleChange}
            value={value}
            min={minValue}
            max={maxValue}
            {...inputProps}
          />
          <span className="text-xl-light absolute right-4">₽</span>
        </div>
      </div>
    );
  },
);
