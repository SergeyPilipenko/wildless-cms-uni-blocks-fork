import type { AsyncDataHook } from '../ContentPage/ContentPageContext';

export function useCalculatorParams<Data>(useAsyncData: AsyncDataHook, dir: string) {
  const { data } = useAsyncData<Data>(
    `/wcms-resources/${dir}.json`,
    fetchCalculatorSourceBookParams,
  );

  return data;
}

async function fetchCalculatorSourceBookParams<Data>(url: string): Promise<Data> {
  const response = await fetch(url);

  return await response.json();
}
