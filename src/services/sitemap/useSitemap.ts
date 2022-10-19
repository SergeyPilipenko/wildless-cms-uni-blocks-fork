import { useAsyncData } from '@redneckz/uni-jsx/lib/hooks/useAsyncData';
import type { HeaderContent } from '../../components/Header/HeaderContent';
import { projectSettings } from '../../ProjectSettings';
import { fetchJSONUnsafe } from '../../utils/fetchJSON';

export function useSitemap(): HeaderContent {
  const { data } = useAsyncData<HeaderContent>(
    `/wcms-resources/${projectSettings.SITEMAP || 'sitemap'}.json`,
    fetchJSONUnsafe,
  );

  return data || {};
}
