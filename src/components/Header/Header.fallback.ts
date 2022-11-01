import { readFile } from 'fs/promises';
import { projectSettings } from '../../ProjectSettings';
import type { FallbackMap } from '../../types/Fallback';

export const fallback = (): FallbackMap => ({
  [`/wcms-resources/${projectSettings.SITEMAP || 'sitemap'}.json`]: async () => {
    const data = await readFile(
      `./content/wcms-resources/${projectSettings.SITEMAP || 'sitemap'}.json`,
      'utf-8',
    );

    return JSON.parse(data);
  },
});
