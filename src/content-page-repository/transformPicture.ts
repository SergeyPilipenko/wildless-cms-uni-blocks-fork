import path from 'path';
import sharp from 'sharp';
import type { Picture } from '../model/Picture';
import type { TransformationOptions } from './TransformationOptions';
import { transformImg } from './transformImg';

export async function transformPicture(
  pagePath: string,
  picture: Picture,
  options: TransformationOptions,
): Promise<Picture> {
  const sources = picture.sources || [];
  const src = picture?.src || '';

  const transformedPicture = await transformImg({
    pagePath,
    src,
    transformationOptions: { ...options, ...picture },
  });

  const { width, height } = await sharp(
    path.resolve(options.publicDir, transformedPicture),
  ).metadata();
  const containerSize = width && height ? { width, height } : undefined;

  const transformedSources = await Promise.all(
    sources.map((_) =>
      transformImg({
        pagePath,
        src,
        containerSize,
        transformationOptions: { ...options, ..._ },
      }),
    ),
  );

  return {
    ...picture,
    src: transformedPicture,
    sources: transformedSources.map((_, i) => ({
      ...sources[i],
      src: _,
      size: { width, height },
    })),
  };
}
