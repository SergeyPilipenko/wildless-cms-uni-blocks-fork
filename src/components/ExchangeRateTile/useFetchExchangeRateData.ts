import { useAsyncData } from '@redneckz/uni-jsx/lib/hooks/useAsyncData';
import { ExchangeCurrencyItem } from '../../components/ExchangeRateTile/ExchangeCurrencyCalculator';
import { fetchJSONUnsafe } from '../../utils/fetchJSON';

export interface ExchangeData {
  exchangeRate?: {
    currencies?: ExchangeCurrencyItem[];
  };
  address?: string;
}

export interface RegionData {
  id?: number;
  code?: string;
  name?: string;
}

const EXCHANGE_RATES_URL = '/api/v1/exchangerates';
const REGION_URL = '/api/v1/region';

export function useFetchExchangeRateData() {
  const { data } = useAsyncData<{
    region?: RegionData;
    exchangeRates?: ExchangeData;
  }>(EXCHANGE_RATES_URL, fetchData);

  return data || {};
}

export function useCurrentPosition() {
  const { data } = useAsyncData<RegionData>(REGION_URL, fetchJSONUnsafe);

  return data || {};
}

const fetchData = async (
  urlExchangeRates: string,
): Promise<{
  region: RegionData;
  exchangeRates: ExchangeData;
}> => {
  const region = await fetchRegion();

  const regionCode = region?.code || '000';

  const exchangeRates = await fetchExchangeRates(urlExchangeRates, regionCode);

  return { region, exchangeRates };
};

const fetchRegion = async (): Promise<RegionData> => {
  try {
    return await fetchJSONUnsafe<RegionData>(REGION_URL, { method: 'GET' });
  } catch (error) {
    console.log(error);

    return {};
  }
};

const fetchExchangeRates = async (url: string, regionCode: string): Promise<ExchangeData> => {
  try {
    return await fetchJSONUnsafe<ExchangeData>(url + `?regionCode=${regionCode}`, {
      method: 'GET',
    });
  } catch (error) {
    console.log(error);

    return {};
  }
};
