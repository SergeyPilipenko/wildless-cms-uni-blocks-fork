import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Icon } from '../../ui-kit/Icon/Icon';
import { BaseTile } from '../BaseTile/BaseTile';
import { getTileHeadingType } from '../BaseTile/getTileHeadingType';
import { getTileMinHeight } from '../BaseTile/getTileMinHeight';
import { getTileRightPadding } from '../BaseTile/getTileRightPadding';
import { CurrentLocation } from './CurrentLocation';
import { BuyCurrency } from './BuyCurrency';
import type { Currencies, ExchangeRateTileContent } from './ExchangeRateTileContent';

export interface ExchangeRateTileProps extends ExchangeRateTileContent, UniBlockProps {}

const CBR_EXCHANGE_RATE_URL = 'https://dataservice.catalog.dev.rshbdev.ru/api/v1/exchangerates';

const CURRENCY_CODES = ['USD', 'EUR'];
const EXCHANGE_CODES = ['RUB', 'USD', 'EUR'];
const CURRENCY_ICONS_MAP = {
  USD: 'DollarIcon',
  EUR: 'EuroIcon',
};

export const ExchangeRateTile = JSX<ExchangeRateTileProps>(
  ({ className = '', context, title = 'Курсы обмена валют' }) => {
    // const { data } = context.useAsyncData(CBR_EXCHANGE_RATE_URL, fetchExchangeRate);
    const dataCurrency = {
      exchangeRate: {
        currencies: [
          {
            buyExchangeRate: 90.6,
            saleExchangeRate: 92.8,
            currency: {
              id: 2,
              code: '978',
              currency: 'EUR',
              name: 'Евро',
            },
          },
          {
            buyExchangeRate: 99.25,
            saleExchangeRate: 104.15,
            currency: {
              id: 7,
              code: '826',
              currency: 'GBP',
              name: 'Фунт стерлингов',
            },
          },
          {
            buyExchangeRate: 73.75,
            saleExchangeRate: 75.95,
            currency: {
              id: 1,
              code: '840',
              currency: 'USD',
              name: 'Американский доллар',
            },
          },
        ],
        updateDate: '2022-08-08',
      },
      name: null,
      address: null,
      description: null,
      gpsLatitude: null,
      gpsLongitude: null,
    };
    const currency = dataCurrency?.exchangeRate?.currencies?.filter((item) => {
      return CURRENCY_CODES.indexOf(item.currency.currency) !== -1;
    });
    const dataBranch = {
      address: 'Москва, ул.Ленина д.28',
      distance: '6км',
    };
    return (
      <section
        className={`bg-white text-primary-text font-sans p-9 box-border ${className}  ${getTileRightPadding(
          className,
        )} ${getTileMinHeight(className)} `}
      >
        <BaseTile
          context={context}
          title={
            title && (
              <Heading
                headingType={getTileHeadingType(className)}
                title={title}
                className={`whitespace-pre-wrap max-w-[600px] ${title ? 'mb-3' : ''}`}
              />
            )
          }
        >
          <div className="flex flex-row">
            <div className="flex flex-col gap-[28px] pt-[22px]">
              {currency ? (
                <table className="h-fit w-fit">
                  <thead>
                    <tr>
                      <CurrencyTH>Валюта</CurrencyTH>
                      <CurrencyTH className="pl-11">Купить</CurrencyTH>
                      <CurrencyTH className="pl-11">Продать</CurrencyTH>
                    </tr>
                  </thead>
                  <tbody>{currency.map((item) => renderCurrencyRow(item))}</tbody>
                </table>
              ) : null}
              <CurrentLocation
                className="max-w-[350px]"
                address={dataBranch.address}
                distance={dataBranch.distance}
              />
            </div>
            {EXCHANGE_CODES ? <BuyCurrency currency={currency} codes={EXCHANGE_CODES} /> : null}
          </div>
        </BaseTile>
      </section>
    );
  },
);

const CurrencyTH = JSX<{ className?: string }>(({ className = '', children }) => (
  <th className={`text-left font-normal text-sm text-secondary-text ${className}`}>{children}</th>
));

const CurrencyTD = JSX<{ className?: string }>(({ className = '', children }) => (
  <td className={`text-left font-normal text-base text-primary-text ${className}`}>{children}</td>
));

async function fetchExchangeRate(): Promise<{
  Valute?: Record<string, { CharCode: string; Name?: string; Value: number; Previous?: number }>;
}> {
  const response = await fetch(CBR_EXCHANGE_RATE_URL);
  return await response.json();
}

const currencyNumberFormat = new Intl.NumberFormat('ru', { style: 'currency', currency: 'RUB' });

const formatCurrency = (value?: number) => (value ? currencyNumberFormat.format(value) : '');

const renderCurrencyRow = (data: Currencies) => {
  const code = data?.currency?.currency;
  return (
    <tr key={code}>
      <CurrencyTD className="pt-4">
        <div className="flex items-center">
          {code ? <Icon name={CURRENCY_ICONS_MAP[code]} width="24" height="24" /> : null}
          <span className="ml-2">{code}</span>
        </div>
      </CurrencyTD>
      <CurrencyTD className="pt-4 pl-11">{formatCurrency(data.buyExchangeRate) || null}</CurrencyTD>
      <CurrencyTD className="pt-4 pl-11">
        {formatCurrency(data.saleExchangeRate) || null}
      </CurrencyTD>
    </tr>
  );
};
