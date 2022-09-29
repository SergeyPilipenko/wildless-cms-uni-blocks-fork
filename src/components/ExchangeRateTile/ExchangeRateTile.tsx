import { JSX } from '@redneckz/uni-jsx';
import { useExchangeRates } from '../../hooks/useExchangeRates';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { BaseTile } from '../BaseTile/BaseTile';
import { getTileHeadingType } from '../BaseTile/getTileHeadingType';
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
  ({ className = '', context, title = 'Курсы обмена валют', ...rest }) => {
    const currencyRates = useExchangeRates(context.useAsyncData);

    const currencyRatesBuy = currencyRates.filter((_) => _.buy);
    currencyRatesBuy.unshift({ code: Currency.RUB });

    const currencyRatesSell = currencyRates.filter((_) => _.sell);
    currencyRatesSell.push({ code: Currency.RUB });

    return (
      <BlockWrapper
        context={context}
        className={`bg-white text-primary-text font-sans p-9 box-border ${className}`}
        {...rest}
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
              {currencyRates ? (
                <CurrencyTable className="mb-[31px]" exchangeCurrencyItems={currencyRates} />
              ) : null}
              <CurrentLocation {...DEFAULT_LOCATION} />
            </div>
            {currencyRates.length && currencyRatesBuy.length && currencyRatesSell.length ? (
              <ExchangeCurrencyCalculator
                className="grow"
                context={context}
                currencyRatesBuy={currencyRatesBuy}
                currencyRatesSell={currencyRatesSell}
              />
            ) : null}
          </div>
        </BaseTile>
      </BlockWrapper>
    );
  },
);
