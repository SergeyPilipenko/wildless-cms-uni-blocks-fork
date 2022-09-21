import { Currency } from './CurrencyProps';

const currencyNumberFormat = new Intl.NumberFormat('ru', {
  style: 'currency',
  currency: Currency.RUB,
});

export const formatCurrency = (value?: number) => (value ? currencyNumberFormat.format(value) : '');
