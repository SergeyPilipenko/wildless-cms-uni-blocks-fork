import fs from 'fs';
import path from 'path';
import util from 'util';
import sharp from 'sharp';
import type { ResizeOptions, Sharp } from 'sharp';
import type { ImageSize } from '../model/ImageSize';
import type { TransformationOptions } from './TransformationOptions';
import type { ImgAlignment, ImgSource, Picture } from '../model/Picture';
import { transformSrc } from './transformSrc';
import { isPictureSizeEmpty } from '../utils/isPictureSizeEmpty';

const mkdir = util.promisify(fs.mkdir);

type TransformImgParams = {
  pagePath: string;
  src: string;
  containerSize?: ImageSize;
  transformationOptions: TransformationOptions & ImgSource;
};

export async function transformImg({
  pagePath,
  src,
  containerSize,
  transformationOptions,
}: TransformImgParams): Promise<string> {
  if (!src) {
    return '';
  }

  const { contentDir, publicDir, format, options, size, alignment } = transformationOptions;

  const pageDir = path.dirname(pagePath);
  const imgPath = `${pageDir}/${src}`;
  let chain = sharp(imgPath);

  const targetSize = getPictureSize(size, containerSize);

  if (targetSize) {
    chain = resizeImg(chain, targetSize, getResizeFit(targetSize));
  }

  if (containerSize) {
    chain = resizeImg(chain, containerSize);

    // Save intermediate transform result to modify further
    const { data } = await chain.toBuffer({ resolveWithObject: true });

    chain = resizeImg(
      sharp(data),
      getCompositionResizeSize(containerSize, targetSize),
      getResizeFit(targetSize),
    );

    chain = await compositeImg({ chain, containerSize, alignment });
  }

  if (format) {
    chain = chain.toFormat(format, options);
  }

  const transformedSrc = transformSrc(src, transformationOptions);
  const transformedImgPath = `${publicDir}/${path.relative(
    contentDir,
    `${path.dirname(pagePath)}/${transformedSrc}`,
  )}`;

  await mkdir(path.dirname(transformedImgPath), { recursive: true });

  try {
    await chain.toFile(transformedImgPath);
  } catch (e) {
    console.error(e);
  }

  return transformedSrc;
}

function createBackgroundImageChain({ width, height }: ImageSize) {
  const channels = 4;
  const rgbaColor = 0x00000000;

  const canvas = Buffer.alloc(width * height * channels, rgbaColor);

  return sharp(canvas, { raw: { width, height, channels } });
}

function resizeImg(chain: Sharp, size: Picture['size'], options?: ResizeOptions) {
  return chain.resize(size?.width, size?.height, {
    fit: sharp.fit.fill,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
    ...options,
  });
}

type CompositeImgParams = {
  chain: Sharp;
  containerSize: ImageSize;
  alignment?: ImgAlignment;
};

async function compositeImg({
  chain,
  containerSize,
  alignment,
}: CompositeImgParams): Promise<Sharp> {
  const { data } = await chain.toBuffer({ resolveWithObject: true });

  return createBackgroundImageChain(containerSize).composite([
    {
      input: data,
      gravity: alignment,
    },
  ]);
}

function getPictureSize(size: Picture['size'], containerSize?: ImageSize) {
  // If containerSize is undefined intrinsic dimensions of image will be used then.
  return isPictureSizeEmpty(size) ? containerSize : size;
}

function getCompositionResizeSize(
  containerSize: ImageSize,
  size: Picture['size'] = {},
): Picture['size'] {
  const { width, height } = size;
  const { width: containerWidth, height: containerHeight } = containerSize;

  let widthRatio = 0;
  let heightRatio = 0;

  if (!(width || height)) {
    return undefined;
  }

  if (width) {
    widthRatio = containerWidth / width;
  }

  if (height) {
    heightRatio = containerHeight / height;
  }

  return widthRatio > heightRatio
    ? { width: Math.min(Number(width), containerWidth) }
    : { height: Math.min(Number(height), containerHeight) };
}

function getResizeFit(size: Picture['size']): ResizeOptions {
  /*
    Editor behaviour with one dimension present: resize by given dimension maintaining aspect ratio. (fit: contain)
    With two dimensions present: resize trying to fill given dimensions (fit: fill)
   */
  return {
    fit: size?.width && size?.height ? sharp.fit.fill : sharp.fit.contain,
  };
}
