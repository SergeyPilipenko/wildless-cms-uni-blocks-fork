import { useAsyncData } from '@redneckz/uni-jsx/lib/hooks/useAsyncData';

export function useCalculatorParams<Data>(dir: string) {
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
