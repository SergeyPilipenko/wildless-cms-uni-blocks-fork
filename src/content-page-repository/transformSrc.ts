import path from 'path';
import type { ImgSource } from '../model/Picture';
import type { TransformationOptions } from './TransformationOptions';
import { isPictureSizeEmpty } from '../utils/isPictureSizeEmpty';

export function transformSrc(
  src: string,
  { format, size }: TransformationOptions & ImgSource,
): string {
  const noTransform = isPictureSizeEmpty(size) && !format;
  if (noTransform) {
    return src;
  }

  const fileName = path.basename(src, path.extname(src));
  const fileSizes = [size?.width, size?.height].filter(Boolean);
  const suffix = fileSizes.length ? `-${fileSizes.join('-')}` : '';
  const ext = format ? String(format) : 'webp';

  return `${fileName}${suffix}.${ext}`;
}
