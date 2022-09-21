import { tableFunc } from '../../utils/tableFunc';
import { Currency } from './CurrencyProps';

interface TableFuncProps {
  value: Currency;
  oppositeValue: Currency;
  handleConvert: (codeFrom?: Currency, codeTo?: Currency) => void;
}

export const callbackCurrencySelect = (_: TableFuncProps) =>
  tableFunc<TableFuncProps, () => void>([
    [
      (_) => _.value !== Currency.RUB && _.oppositeValue !== Currency.RUB,
      () => _.handleConvert(_.value, Currency.RUB),
    ],
    [
      (_) => _.value === Currency.RUB && _.oppositeValue === Currency.RUB,
      () => _.handleConvert(_.value, Currency.USD),
    ],
    [() => true, () => _.handleConvert(_.value)],
  ])(_)?.();
