import { JSX } from '@redneckz/uni-jsx';
import { clamp } from '../../utils/clamp';

// ISO 4217 codes
/**
 * @title Валюта
 * @enumNames ["Рубль", "Доллар", "Евро"]
 * @default "RUB"
 */
type Currency = 'RUB' | 'USD' | 'EUR';

const CurrencyMap: Record<Currency, string> = {
  RUB: '₽',
  USD: '$',
  EUR: '€',
};

type CurrencyInputProps = {
  className?: string;
  label?: string;
  currency?: Currency;
  onChange?: (value: string) => void;
  name?: string;
  value?: string;
  placeholder?: string;
  minValue?: number;
  maxValue?: number;
};

export const CurrencyInput = JSX<CurrencyInputProps>(
  ({
    className = '',
    label,
    currency = 'RUB',
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
            className="text-l pl-4 pr-8 w-full h-full rounded-md border border-solid border-main-stroke hover:border-primary-hover active:border-primary-text focus:border-primary-text"
            onChange={handleChange}
            value={value}
            min={minValue}
            max={maxValue}
            {...inputProps}
          />
          <span className="text-xl-light absolute right-4">{CurrencyMap[currency]}</span>
        </div>
      </div>
    );
  },
);
