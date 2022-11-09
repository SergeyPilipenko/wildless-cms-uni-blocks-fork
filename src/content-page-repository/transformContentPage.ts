import fs from 'fs';
import util from 'util';
import type { ContentPageDef } from '../model/ContentPageDef';
import type { Picture } from '../model/Picture';
import { mapJSON } from './mapJSON';
import type { TransformationOptions } from './TransformationOptions';
import { transformMarkdown } from './transformMarkdown';
import { transformPicture } from './transformPicture';

const readFile = util.promisify(fs.readFile);

export async function transformContentPage(
  pagePath: string,
  options: TransformationOptions,
): Promise<ContentPageDef> {
  const content = await readFile(pagePath, 'utf8');

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return mapJSON<ContentPageDef>(JSON.parse(content), async (value: any, [key]) => {
    const isMarkdown = typeof value === 'string' && key?.endsWith('__md');

    if (isMarkdown) {
      return await transformMarkdown(value);
    } else if (isPicture(value)) {
      try {
        return await transformPicture(pagePath, value, options);
      } catch (ex) {
        console.warn('Error while transforming picture on page: %s', pagePath);
        console.error(ex);
      }
    }

    return value;
  });
}

const isLocalPath = (_: any): boolean => isString(_) && _.length < 512 && !isURL(_);

const isString = (_: any): _ is string => Boolean(_ && typeof _ === 'string');

const isURL = (src: string) => ['data:', 'https:', 'http:'].some((proto) => src.startsWith(proto));

const isPicture = (_: any): _ is Picture => Boolean(_ && isLocalPath(_?.src));
