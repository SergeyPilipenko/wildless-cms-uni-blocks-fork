const currencyNumberFormat = new Intl.NumberFormat('ru', { style: 'currency', currency: 'RUB' });

export const formatCurrency = (value?: number) => (value ? currencyNumberFormat.format(value) : '');
