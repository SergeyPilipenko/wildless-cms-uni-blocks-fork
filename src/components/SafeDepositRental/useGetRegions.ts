import { useAsyncData } from '@redneckz/uni-jsx/lib/hooks/useAsyncData';
import { fetchJSONUnsafe } from '../../utils/fetchJSON';

const REGIONS_URL = '/api/v1/admin/regions';

export interface Region {
  id?: number;
  code?: string;
  name?: string;
}

export function useGetRegions(): Region[] {
  const { data } = useAsyncData<Region[]>(REGIONS_URL, fetchJSONUnsafe);

  return data || [];
}
