import { JSX } from '@redneckz/uni-jsx';
import { useExchangeRates } from '../../hooks/useExchangeRates';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { BaseTile } from '../BaseTile/BaseTile';
import { getTileHeadingType } from '../BaseTile/getTileHeadingType';
import { CurrencyTable } from './CurrencyTable';
import { CurrentLocation } from './CurrentLocation';
import { ExchangeCurrencyCalculator } from './ExchangeCurrencyCalculator';
import type { ExchangeRateTileContent } from './ExchangeRateTileContent';

const CURRENCY_CODES = ['USD', 'EUR'];
const EXCHANGE_CODES = ['RUB', 'USD', 'EUR'];
const DEFAULT_CURRENCY_ITEMS = [
  {
    buyExchangeRate: 90.6,
    saleExchangeRate: 92.8,
    currency: { id: 2, code: '978', currency: 'EUR', name: 'Евро' },
  },
  {
    buyExchangeRate: 73.75,
    saleExchangeRate: 75.95,
    currency: { id: 1, code: '840', currency: 'USD', name: 'Американский доллар' },
  },
];

const DEFAULT_LOCATION = {
  address: 'Москва, ул.Ленина д.28',
  distance: '6км',
};

export interface ExchangeRateTileProps extends ExchangeRateTileContent, UniBlockProps {}

export const ExchangeRateTile = JSX<ExchangeRateTileProps>(
  ({ className = '', context, title = 'Курсы обмена валют', anchor = null }) => {
    const data = useExchangeRates(context.useAsyncData);
    const exchangeCurrencyItems =
      data?.exchangeRate?.currencies?.filter((item) => {
        return CURRENCY_CODES.indexOf(item?.currency?.currency || '') !== -1;
      }) || DEFAULT_CURRENCY_ITEMS;

    return (
      <section
        className={`bg-white text-primary-text font-sans p-9 box-border ${className}`}
        id={anchor}
      >
        <BaseTile
          context={context}
          title={
            <Heading
              headingType={getTileHeadingType(className)}
              title={title}
              className="whitespace-pre-wrap"
            />
          }
        >
          <div className="flex">
            <div className="mr-[43px] pt-4">
              {exchangeCurrencyItems ? (
                <CurrencyTable
                  className="mb-[31px]"
                  exchangeCurrencyItems={exchangeCurrencyItems}
                />
              ) : null}
              <CurrentLocation {...DEFAULT_LOCATION} />
            </div>
            {exchangeCurrencyItems?.length ? (
              <ExchangeCurrencyCalculator
                className="grow"
                exchangeCurrencyItems={exchangeCurrencyItems}
                codes={EXCHANGE_CODES}
              />
            ) : null}
          </div>
        </BaseTile>
      </section>
    );
  },
);
