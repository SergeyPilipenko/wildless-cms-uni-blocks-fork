import { JSX } from '@redneckz/uni-jsx';
import { useExchangeRates } from '../../hooks/useExchangeRates';
import type { UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import { BaseTile } from '../BaseTile/BaseTile';
import { Currency } from './CurrencyProps';
import { CurrencyTable } from './CurrencyTable';
import { CurrentLocation } from './CurrentLocation';
import { ExchangeCurrencyCalculator } from './ExchangeCurrencyCalculator';
import type { ExchangeRateTileContent } from './ExchangeRateTileContent';

const DEFAULT_LOCATION = {
  address: 'Москва, ул.Ленина д.28',
  distance: '6км',
};

export interface ExchangeRateTileProps extends ExchangeRateTileContent, UniBlockProps {}

export const ExchangeRateTile = JSX<ExchangeRateTileProps>(
  ({ className = '', context, title = 'Курсы обмена валют', button, ...rest }) => {
    const currencyRates = useExchangeRates();

    const currencyRatesBuy = currencyRates.filter((_) => _.buy);
    currencyRatesBuy.unshift({ code: Currency.RUB });

    const currencyRatesSell = currencyRates.filter((_) => _.sell);
    currencyRatesSell.push({ code: Currency.RUB });

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
              <CurrentLocation {...DEFAULT_LOCATION} />
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
