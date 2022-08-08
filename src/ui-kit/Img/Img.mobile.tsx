import { JSX } from '@redneckz/uni-jsx';
import type { ImgSource } from '../../model/Picture';
import { ImageProps } from './ImgProps';

export const Img = JSX<ImageProps>(({ className = '', image }) => {
  if (!image) {
    return null;
  }
  const style = {
    width: image.size?.width ? `${image.size?.width}px` : '100%',
    height: image.size?.height ? `${image.size?.height}px` : '100%',
  };

  return (
    <picture className={className}>
      {image.sources?.length
        ? image.sources.map(({ src, format }, index) => (
            <source key={`${index}_${src}`} srcSet={src} type={formatToMimeType(format)} />
          ))
        : null}
      <img
        src={image.src}
        className={`m-auto ${image.className || ''}`}
        alt={image.alt || image.title}
        title={image.title}
        style={style}
        {...image.size}
      />
    </picture>
  );
});

export function formatToMimeType(format: ImgSource['format']): string | undefined {
  return format ? `image/${String(format)}` : undefined;
}
