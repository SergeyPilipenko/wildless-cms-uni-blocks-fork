import { useAsyncData } from '@redneckz/uni-jsx/lib/hooks/useAsyncData';
import type { ExchangeCurrencyItem } from '../components/ExchangeRateTile/ExchangeCurrencyCalculator';

interface RatesData {
  code: string;
  rate_buy: number;
  rate_sell: number;
}

export function useExchangeRates(): ExchangeCurrencyItem[] {
  const { data } = useAsyncData(EXCHANGE_RATES_URL, fetchExchangeRates);

  const result = data?.hits?.hits?.map((_) => _._source) || [];

  return result.length ? getCurrencyListByRate(result as RatesData[]) : result;
}

async function fetchExchangeRates(): Promise<any | undefined> {
  try {
    const response = await fetch(EXCHANGE_RATES_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(EXCHANGE_RATES_BODY),
    });

    return await response.json();
  } catch (err) {
    console.error(err);

    return Promise.resolve();
  }
}

const EXCHANGE_RATES_URL =
  'https://coins.rshb.ru/api/catalog/vue_storefront_magento_1_currency_rates_average/currency_rates_average/_search?size=10000';

const EXCHANGE_RATES_BODY = {
  query: {
    bool: {
      must: [
        {
          term: {
            // eslint-disable-next-line camelcase
            russian_region_code: '77',
          },
        },
        {
          term: {
            // eslint-disable-next-line camelcase
            from_volume: '0',
          },
        },
        {
          terms: {
            // eslint-disable-next-line camelcase
            currency_pair: ['USD/RUB', 'EUR/RUB'],
          },
        },
      ],
    },
  },
};

interface FormatRatesData {
  code: string;
  buy?: number;
  sell?: number;
}

const getCurrencyListByRate = (currencyRates: RatesData[]) =>
  currencyRates.reduce((result: FormatRatesData[], _) => {
    const currencyInfo = _['currency_first'];
    const currencyCode = currencyInfo?.code;
    if (!result.some((i) => i.code === currencyCode)) {
      result.push({
        code: currencyCode,
        buy: roundRate(Number(_.rate_buy)),
        sell: roundRate(Number(_.rate_sell)),
      });
    }

    return result;
  }, []);

const roundRate = (value) => Math.round(value * 1000) / 1000;
