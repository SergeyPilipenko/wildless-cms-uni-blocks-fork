import { JSX } from '@redneckz/uni-jsx';
import type { Picture, ImgSource } from '../../model/Picture';

export interface ImageProps {
  className?: string;
  imageClassName?: string;
  image: Picture;
}

export const Img = JSX<ImageProps>(({ className = '', image, imageClassName }) => {
  if (!image) {
    return null;
  }

  return (
    <picture className={className}>
      {image.sources?.length
        ? image.sources.map(({ src, format }, index) => (
            <source key={`${index}_${src}`} srcSet={src} type={formatToMimeType(format)} />
          ))
        : null}
      {renderImg(image, imageClassName)}
    </picture>
  );
});

const renderImg = (image, imageClassName = '') => {
  const style = {
    width: image.size?.width ? `${image.size?.width}px` : '100%',
    height: image.size?.height ? `${image.size?.height}px` : '100%',
  };
  const title = image.title || '';
  const alt = image.alt || image.title;

  return (
    <img
      src={image.src}
      className={`m-auto ${imageClassName}`}
      alt={alt}
      title={title}
      style={style}
      {...image.size}
    />
  );
};

export function formatToMimeType(format: ImgSource['format']): string | undefined {
  return format ? `image/${String(format)}` : undefined;
}
