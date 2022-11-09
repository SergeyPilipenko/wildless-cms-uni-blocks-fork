import { JSX } from '@redneckz/uni-jsx';
import type { CurrencyInputProps } from './CurrencyInputProps';
import { clamp } from '../../utils/clamp';
import { adjustValue } from './adjustValue ';

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
    const handleChange = (e: { target: { value: string } | null }) => {
      if (!onChange) {
        return;
      }
      const adjustedVal = adjustValue(e.target?.value || '');
      const clampVal = getClampValue(adjustedVal, clamp(Number(adjustedVal), minValue, maxValue));
      onChange(String(clampVal));
    };

    return (
      <div className={className}>
        {label ? <label className="block text-m-light mb-2">{label}</label> : null}
        <div className="h-[56px] relative flex items-center">
          <input
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

const getClampValue = (val: string, clampVal) =>
  Number(val) === clampVal ? val : String(clampVal);
