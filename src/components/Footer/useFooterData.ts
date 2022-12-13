import { useAsyncData } from '@redneckz/uni-jsx/lib/hooks/useAsyncData';
import type { FooterContent } from '../../components/Footer/FooterContent';
import { projectSettings } from '../../ProjectSettings';
import { fetchJSONUnsafe } from '../../utils/fetchJSON';

export function useFooterData(): FooterContent {
  const { data } = useAsyncData<FooterContent>(
    `/wcms-resources/${projectSettings.FOOTER || 'footer'}.json`,
    fetchJSONUnsafe,
  );

  return data || {};
}
