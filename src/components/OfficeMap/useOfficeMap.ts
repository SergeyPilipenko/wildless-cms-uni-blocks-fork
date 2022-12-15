import { useAsyncData } from '@redneckz/uni-jsx/lib/hooks/useAsyncData';
import { fetchJSON } from '../../utils/fetchJSON';
import { OFFICE_MAP } from './mockOfficeMap';

const OFFICE_MAP_URL = '/api/v1/branches';

// TODO: regionCode - внутренний идентификатор банка. Не соответствует государственной нумерации регионов РФ
// TODO: Список регионов можно получить через api/v1/regions
export function useOfficeMap(regionCode?: string) {
  const { data } = useAsyncData<{ data?: any }, any, string | undefined>(
    regionCode ? `${OFFICE_MAP_URL}?regionCode=${regionCode}` : undefined,
    fetchOfficeMap,
  );
  console.warn('WARNING!!!  Hook useOfficeMap RETURN MOCK object for testing!');
  console.log('Hook useOfficeMap get this data:', data);

  return OFFICE_MAP;
}

const fetchOfficeMap = (url?: string) => {
  if (!url) {
    return {};
  }

  return fetchJSON(url, { method: 'GET' });
};
