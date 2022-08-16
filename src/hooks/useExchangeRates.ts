import type { AsyncDataHook } from '../components/ContentPage/ContentPageContext';
import { ExchangeCurrencyItem } from '../components/ExchangeRateTile/ExchangeRateTileContent';

interface ExchangeRatesData {
  exchangeRate?: {
    currencies?: ExchangeCurrencyItem[];
  };
}

export function useExchangeRates(useAsyncData: AsyncDataHook): ExchangeRatesData {
  const { data } = useAsyncData(EXCHANGE_RATES_URL, fetchExchangeRates);

  return data || {};
}

async function fetchExchangeRates(): Promise<ExchangeRatesData | undefined> {
  try {
    const response = await fetch(EXCHANGE_RATES_URL);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

const EXCHANGE_RATES_URL = '/api/v1/exchangerates.json';
