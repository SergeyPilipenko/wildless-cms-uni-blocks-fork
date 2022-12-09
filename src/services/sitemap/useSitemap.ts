import { useAsyncData } from '@redneckz/uni-jsx/lib/hooks/useAsyncData';
import type { Fallback } from '../../model/Fallback';
import { projectSettings } from '../../ProjectSettings';
import { fetchJSONUnsafe } from '../../utils/fetchJSON';
import type { SitemapProps } from './SitemapProps';

export function useSitemap(fallback: Fallback = {}): SitemapProps {
  const { data } = useAsyncData<SitemapProps>(
    `/wcms-resources/${projectSettings.SITEMAP || 'sitemap'}.json`,
    fetchJSONUnsafe,
    { fallback },
  );

  return data || {};
}
