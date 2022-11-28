import { useAsyncData } from '@redneckz/uni-jsx/lib/hooks/useAsyncData';
import { fetchJSON } from '../../utils/fetchJSON';

const OFFICE_MAP_URL = '/api/v1/branches';

// TODO: regionCode - внутренний идентификатор банка. Не соответствует государственной нумерации регионов РФ
// TODO: Список регионов можно получить через api/v1/regions
export function useOfficeMap(regionCode?: string) {
  const { data } = useAsyncData<{ data?: any }, any, string | undefined>(
    regionCode ? `${OFFICE_MAP_URL}?regionCode=${regionCode}` : undefined,
    fetchOfficeMap,
  );

  return data;
}

const fetchOfficeMap = (url?: string) => {
  if (!url) {
    return {};
  }

  return fetchJSON(url, { method: 'GET' });
};
