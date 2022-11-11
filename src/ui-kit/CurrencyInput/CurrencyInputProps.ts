import type { InputProps } from '../Input/InputProps';

export type CurrencyInputProps = InputProps & {
  minValue?: number;
  maxValue?: number;
};
