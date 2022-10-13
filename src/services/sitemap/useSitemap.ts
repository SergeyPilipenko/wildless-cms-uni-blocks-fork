import { useAsyncData } from '@redneckz/uni-jsx/lib/hooks/useAsyncData';
import type { HeaderContent } from '../../components/Header/HeaderContent';
import { projectSettings } from '../../ProjectSettings';

export function useSitemap(): HeaderContent {
  const { data } = useAsyncData(sitemapURL(), fetchSitemap);

  return data || {};
}

async function fetchSitemap(): Promise<HeaderContent> {
  const response = await fetch(sitemapURL());

  return await response.json();
}

function sitemapURL() {
  return `/wcms-resources/${projectSettings.SITEMAP || 'sitemap'}.json`;
}
