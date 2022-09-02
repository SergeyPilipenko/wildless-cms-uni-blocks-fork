import { JSX } from '@redneckz/uni-jsx';
import { Img } from '../../ui-kit/Img/Img';
import type { ExchangeCurrencyItem } from './ExchangeRateTileContent';
import { formatCurrency } from './formatCurrency';

const TABLE_HEAD_STYLE = 'font-light text-left font-normal text-sm text-secondary-text';

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
  const code = exchangeCurrencyItem?.currency?.currency;
  return (
    <tr key={code} className="pb-1">
      <td className="pt-4">
        <div className="flex items-center">
          {code ? <Img image={{ icon: CURRENCY_ICONS_MAP[code] }} width="24" height="24" /> : null}
          <span className="text-m-title-md ml-2">{code}</span>
        </div>
      </td>
      <td className="pt-4 pl-11 m-title-md font-light">
        {formatCurrency(exchangeCurrencyItem.buyExchangeRate)}
      </td>
      <td className="pt-4 pl-11 m-title-md font-light">
        {formatCurrency(exchangeCurrencyItem.saleExchangeRate)}
      </td>
    </tr>
  );
};
