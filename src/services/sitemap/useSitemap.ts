import { useAsyncData } from '@redneckz/uni-jsx/lib/hooks/useAsyncData';
import type { HeaderContent } from '../../components/Header/HeaderContent';
import { projectSettings } from '../../ProjectSettings';
import type { Fallback } from '../../model/Fallback';
import { fetchJSONUnsafe } from '../../utils/fetchJSON';

export function useSitemap(fallback: Fallback = {}): HeaderContent {
  const { data } = useAsyncData<HeaderContent>(
    `/wcms-resources/${projectSettings.SITEMAP || 'sitemap'}.json`,
    fetchJSONUnsafe,
    { fallback },
  );

  return data || {};
}
