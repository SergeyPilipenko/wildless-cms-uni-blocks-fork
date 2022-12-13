import { useAsyncData } from '@redneckz/uni-jsx/lib/hooks/useAsyncData';
import type { Fallback } from '../../model/Fallback';
import { fetchJSONUnsafe } from '../../utils/fetchJSON';

export function useSWRResource<Data>(fileName: string, fallback: Fallback = {}): Data {
  const { data } = useAsyncData<Data>(`/wcms-resources/${fileName}.json`, fetchJSONUnsafe, {
    fallback,
  });

  return data || ({} as Data);
}
