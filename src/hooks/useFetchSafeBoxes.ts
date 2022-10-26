import { useAsyncData } from '@redneckz/uni-jsx/lib/hooks/useAsyncData';
import { fetchJSON } from '../utils/fetchJSON';

export interface Tariff {
  tariffType?: string;
  tariffValue?: number;
}

export interface SafeBoxCase {
  safeBoxCasesSize?: string;
  tariffs?: Tariff[];
}

export interface SafeBoxCaseVolume {
  volume?: string;
  safeBoxCases?: SafeBoxCase[];
}

export interface Branch {
  branchCode?: string;
  address?: string;
  gpsLatitude?: number;
  gpsLongitude?: number;
  safeBoxCaseVolumes?: SafeBoxCaseVolume[];
}

const SAFEBOXES_URL = '/api/v1/safeboxes';

export function useFetchSafeBoxes(regionCode?: string) {
  const { data } = useAsyncData<{ data?: Branch[] }, any, string | null>(
    regionCode ? `${SAFEBOXES_URL}?regionCode=${regionCode}` : null,
    fetchSafeBoxes,
  );

  return data || [];
}

const fetchSafeBoxes = (url?: string) => {
  if (!url) {
    return {};
  }

  return fetchJSON(url, { method: 'GET' });
};
