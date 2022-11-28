import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import { BaseTile } from '../BaseTile/BaseTile';
import { Currency } from './CurrencyProps';
import { CurrencyTable } from './CurrencyTable';
import { CurrentLocation } from './CurrentLocation';
import { ExchangeCurrencyCalculator, ExchangeCurrencyItem } from './ExchangeCurrencyCalculator';
import type { ExchangeRateTileContent } from './ExchangeRateTileContent';
import { useFetchExchangeRateData } from './useFetchExchangeRateData';

export interface ExchangeRateTileProps extends ExchangeRateTileContent, UniBlockProps {}

export const ExchangeRateTile = JSX<ExchangeRateTileProps>(
  ({ className = '', context, title = 'Курсы обмена валют', button, ...rest }) => {
    const { exchangeRates } = useFetchExchangeRateData();

    const currencyRates = getCurrencyRates(exchangeRates?.exchangeRate?.currencies);

    const currencyRatesBuy = currencyRates.filter((_) => _.buyExchangeRate);
    currencyRatesBuy.unshift({ currency: { currency: Currency.RUB } });

    const currencyRatesSell = currencyRates.filter((_) => _.saleExchangeRate);
    currencyRatesSell.push({ currency: { currency: Currency.RUB } });

    return (
      <BlockWrapper
        context={context}
        className={`bg-white text-primary-text font-sans p-9 box-border min-h-[320px] ${className}`}
        {...rest}
      >
        <BaseTile
          context={context}
          title={
            <Heading headingType="h4" title={title} className="whitespace-pre-wrap text-h4 mb-5" />
          }
        >
          <div className="flex">
            <div className="mr-14 pt-4">
              {currencyRates ? (
                <CurrencyTable className="mb-[30px]" exchangeCurrencyItems={currencyRates} />
              ) : null}
              <CurrentLocation address={exchangeRates?.address} />
            </div>
            {currencyRates.length && currencyRatesBuy.length && currencyRatesSell.length ? (
              <ExchangeCurrencyCalculator
                className="grow"
                context={context}
                currencyRatesBuy={currencyRatesBuy}
                currencyRatesSell={currencyRatesSell}
                button={button}
              />
            ) : null}
          </div>
        </BaseTile>
      </BlockWrapper>
    );
  },
);

const getCurrencyRates = (currencies?: ExchangeCurrencyItem[]) => {
  return currencies?.filter((_) => _?.currency?.id === 1 || _?.currency?.id === 2) || [];
};
