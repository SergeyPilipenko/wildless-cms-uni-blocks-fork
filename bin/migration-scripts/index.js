import { readdir } from 'fs/promises';
import { basename } from 'path';

export const migrationScripts = (await readdir(new URL('.', import.meta.url)))
  .filter((_) => !_.startsWith('index'))
  .sort(versionComparator);

export const loadedScripts = await Promise.all(
  migrationScripts.map((scriptName) => import(`./${scriptName}`)),
);

function versionComparator(scriptA, scriptB) {
  const getVersion = (_) =>
    basename(_, '.js')
      .split('.')
      .map((part) => parseInt(part, 10));
  const versionA = getVersion(scriptA);
  const versionB = getVersion(scriptB);

  return versionA.reduce((result, partA, i) => (result !== 0 ? result : partA - versionB[i]), 0);
}
