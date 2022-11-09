import { JSX } from '@redneckz/uni-jsx';
import type { CurrencyInputProps } from './CurrencyInputProps';
import { clamp } from '../../utils/clamp';

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

const adjustValue = (val: string) => onlyOneDot(setZeroStart(replaceCommaToDot(val)));

const getClampValue = (val: string, clampVal) =>
  Number(val) === clampVal ? val : String(clampVal);

const setZeroStart = (val: string): string => {
  const isZeroStart = val.indexOf('0') === 0 && val.length === 2;
  const newVal = isZeroStart ? val.replace('0', '0.') : val;

  return newVal.startsWith('.') ? newVal.replace('.', '0.') : newVal;
};

const replaceCommaToDot = (val: string): string =>
  String(val.replace(',', '.').replace(/[^.\d]/g, ''));

const onlyOneDot = (val: string): string => {
  const matches = val.match(/\./g) || [];

  return matches.length > 1 ? val.slice(0, val.lastIndexOf('.')) : val;
};
