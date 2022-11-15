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
const EMPTY_VALUE = [];

export function useSafeBoxes(regionCode?: string): Branch[] {
  const { data } = useAsyncData<Branch[], any, string | null>(
    regionCode ? `${SAFEBOXES_URL}?regionCode=${regionCode}` : null,
    fetchSafeBoxes,
  );

  return data || EMPTY_VALUE;
}

const fetchSafeBoxes = async (url: string): Promise<Branch[]> => {
  const result = await fetchJSON<Branch[]>(url, { method: 'GET' });

  return result || EMPTY_VALUE;
};
