import fs from 'fs';
import glob from 'glob';
import { basename, join } from 'path';
import process from 'process';
import { optimize } from 'svgo';
import { promisify } from 'util';

const findFiles = promisify(glob);
const mkdir = promisify(fs.mkdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const [, , iconsDir, outDir] = process.argv;

const SVG_EXT = '.svg';

const SVGO_CONFIG = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          cleanupIDs: false,
        },
      },
    },
  ],
};

(async () => {
  const icons = await findFiles(`${iconsDir}/*${SVG_EXT}`);
  const processedIcons = await Promise.all(icons.map(optimizeIcon));
  process.stdout.write(
    generateIconNameType(
      icons.map((_) => basename(_, SVG_EXT)),
      processedIcons.map(([title]) => title),
      processedIcons.map(([, , inverse]) => inverse),
    ),
  );
})();

async function optimizeIcon(iconPath) {
  const icon = await readFile(iconPath, 'utf-8');
  const optimized = optimize(icon, { ...SVGO_CONFIG, path: iconPath });
  const result = injectIconId(optimized.data);
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, basename(iconPath)), result);

  return [getIconTitle(icon), result, getIconInverse(icon) ?? false];
}

function generateIconNameType(iconNames, iconTitles, inverse) {
  return `
// Generated. Do not touch
/* eslint-disable max-len, max-lines */

export const IconInverseMap = {
  ${iconTitles.map((title, i) => [iconNames[i], inverse[i] || false].join(': ')).join(', ')}
}

export enum IconMap {
  ${iconNames.map((_) => [_, wrap(_)].join(' = ')).join(', ')}
}

export enum IconTitleMap {
  ${iconTitles
    .map((title, i) => [iconNames[i], wrap(title || iconNames[i])].join(' = '))
    .join(', ')}
}

/**
 *
 * @title Иконка
 * @enumNames [
 *   "",
 *   ${iconTitles
   .map((_, i) => _ || iconNames[i])
   .map(wrap)
   .join(', ')}
 * ]
 */
export type IconName = '' | ${iconNames.map(wrap).join(' | ')};
`;
}

function injectIconId(svg) {
  return svg?.replace('<svg', '<svg id="icon"');
}

function getIconTitle(svg) {
  return (svg?.match(/title\s*=\s*"([^"]+)"/) || [])[1];
}

function getIconInverse(svg) {
  return (svg?.match(/isInverse\s*=\s*"([^"]+)"/) || [])[1];
}

function wrap(_) {
  return `'${_.replace(/'/g, "\\'")}'`;
}
