import { JSX } from '@redneckz/uni-jsx';
import { Img } from '../../ui-kit/Img/Img';
import type { ExchangeCurrencyItem } from './ExchangeCurrencyCalculator';
import { formatCurrency } from './formatCurrency';

const TABLE_HEAD_STYLE = 'text-left text-m-light text-secondary-text';

const CURRENCY_ICONS_MAP = {
  USD: 'DollarIcon',
  EUR: 'EuroIcon',
};

interface CurrencyTableProps {
  className?: string;
  exchangeCurrencyItems: ExchangeCurrencyItem[];
}

export const CurrencyTable = JSX<CurrencyTableProps>(({ className, exchangeCurrencyItems }) => {
  return (
    <table className={`h-fit w-fit ${className}`}>
      <thead>
        <tr>
          <th className={TABLE_HEAD_STYLE}>Валюта</th>
          <th className={`${TABLE_HEAD_STYLE} pl-11`}>Купить</th>
          <th className={`${TABLE_HEAD_STYLE} pl-11`}>Продать</th>
        </tr>
      </thead>
      <tbody>{exchangeCurrencyItems.map((item) => renderCurrencyRow(item))}</tbody>
    </table>
  );
});

const renderCurrencyRow = (exchangeCurrencyItem: ExchangeCurrencyItem) => {
  const currency = exchangeCurrencyItem?.currency?.currency;

  return (
    <tr key={currency} className="pb-1 text-h6">
      <td className="pt-4">
        <div className="flex items-center">
          {currency ? (
            <Img image={{ icon: CURRENCY_ICONS_MAP[currency] }} width="24" height="24" />
          ) : null}
          <span className="ml-2">{currency}</span>
        </div>
      </td>
      <td className="pt-4 pl-11">{formatCurrency(exchangeCurrencyItem?.saleExchangeRate)}</td>
      <td className="pt-4 pl-11">{formatCurrency(exchangeCurrencyItem?.buyExchangeRate)}</td>
    </tr>
  );
};
