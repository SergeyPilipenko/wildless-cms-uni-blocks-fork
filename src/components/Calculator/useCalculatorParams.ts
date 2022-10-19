import { useAsyncData } from '@redneckz/uni-jsx/lib/hooks/useAsyncData';
import { fetchJSONUnsafe } from '../../utils/fetchJSON';

export function useCalculatorParams<Data>(dir: string) {
  const { data } = useAsyncData<Data>(`/wcms-resources/${dir}.json`, fetchJSONUnsafe);

  return data;
}
