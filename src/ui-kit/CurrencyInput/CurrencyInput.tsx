import { JSX } from '@redneckz/uni-jsx';
import { clamp } from '../../utils/clamp';
import { adjustValue, localNumberFormat } from './adjustValue ';
import { useCallback } from '@redneckz/uni-jsx/lib/hooks';
import { Input } from '../Input/Input';
import type { CurrencyInputProps } from './CurrencyInputProps';

export const CurrencyInput = JSX<CurrencyInputProps>(
  ({ className = '', onChange, minValue = 0, maxValue = 300000, ...inputProps }) => {
    const handleChange = useCallback(
      (inputValue: string) => {
        if (!onChange) {
          return;
        }
        const adjustedVal = adjustValue(inputValue);
        const clampVal = getClampValue(adjustedVal, clamp(Number(adjustedVal), minValue, maxValue));
        onChange(String(clampVal));
      },
      [onChange],
    );

    const handleBlur = useCallback(
      (inputValue: string) => {
        if (!onChange) {
          return;
        }
        onChange(localNumberFormat(inputValue));
      },
      [onChange],
    );

    return (
      <Input
        className={className}
        inputClassName="w-full"
        onChange={handleChange}
        onBlur={handleBlur}
        {...inputProps}
      >
        <span className="text-xl-light absolute right-4 bottom-4">₽</span>
      </Input>
    );
  },
);

const getClampValue = (val: string, clampVal: number): string =>
  Number(val) === clampVal ? val : String(clampVal);
