import { readFile } from 'fs/promises';
import type { FallbackMap } from '../../model/Fallback';
import { projectSettings } from '../../ProjectSettings';

export const fallback = (): FallbackMap => ({
  ...fallbackWCMSResource(projectSettings.SITEMAP || 'sitemap'),
  ...fallbackWCMSResource(projectSettings.FOOTER || 'footer'),
});

const fallbackWCMSResource = (filename: string): FallbackMap => ({
  [filename]: async () =>
    JSON.parse(await readFile(`./content/wcms-resources/${filename}.json`, 'utf-8')),
});
