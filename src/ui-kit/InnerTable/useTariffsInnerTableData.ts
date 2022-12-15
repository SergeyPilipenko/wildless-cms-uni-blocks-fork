import { useAsyncData } from '@redneckz/uni-jsx/lib/hooks/useAsyncData';

export function useTariffsInnerTableData(directoryName?: string): any {
  const { data } = useAsyncData(
    tariffsInnerTableDataUrl(directoryName),
    fetchTariffsInnerTableData,
  );

  return data || {};
}

async function fetchTariffsInnerTableData(url: string): Promise<any> {
  const response = await fetch(url);

  return await response.json();
}

function tariffsInnerTableDataUrl(directoryName?: string) {
  return `/wcms-resources/${directoryName || 'tariffs-inner-table-data'}.json`;
}
