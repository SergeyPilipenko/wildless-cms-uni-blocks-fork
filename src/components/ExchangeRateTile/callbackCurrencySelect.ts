import { tableFunc } from '../../utils/tableFunc';
import { Currency } from './CurrencyProps';

interface TableFuncProps {
  value: Currency;
  oppositeValue: Currency;
  handleConvert: (currencyFrom?: Currency, currencyTo?: Currency) => void;
}

export const callbackCurrencySelect = (props: TableFuncProps) =>
  tableFunc<TableFuncProps, () => void>([
    [
      (_) => _.value !== Currency.RUB && _.oppositeValue !== Currency.RUB,
      () => props.handleConvert(props.value, Currency.RUB),
    ],
    [
      (_) => _.value === Currency.RUB && _.oppositeValue === Currency.RUB,
      () => props.handleConvert(props.value, Currency.USD),
    ],
    [() => true, () => props.handleConvert(props.value)],
  ])(props)?.();
