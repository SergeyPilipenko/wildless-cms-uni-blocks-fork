import type { AsyncDataHook } from '../components/ContentPage/ContentPageContext';

export function useCreditCalculatorData(
  useAsyncData: AsyncDataHook,
  directoryName: string | undefined,
): any {
  const { data } = useAsyncData(creditCalculatorUrl(directoryName), fetchCreditCalculatorData);
  return data || {};
}

async function fetchCreditCalculatorData(url: string): Promise<any> {
  const response = await fetch(url);
  return await response.json();
}

function creditCalculatorUrl(directoryName: string | undefined) {
  return `/wcms-resources/${directoryName || 'credit-calculator-data'}.json`;
}
