import { JSX } from '@redneckz/uni-jsx';
import type { ImgSource, Picture } from '../../model/Picture';
import type { ImageProps } from './ImgProps';

const sourcesComparator = (a: Picture, b: Picture) => {
  if (a.media && b.media) {
    return a.media - b.media;
  }

  return 0;
};

export const ImgAsPicture = JSX<ImageProps<Picture>>(
  ({ className = '', image, imageClassName = '', isMobile = false }) => {
    if (!image || (!image?.sources && !image?.src)) {
      return null;
    }

    const pictureStyles = isMobile ? 'flex' : 'flex-none';

    return (
      <picture className={`${pictureStyles} ${className}`}>
        {image?.sources?.length
          ? image.sources
              .sort(sourcesComparator)
              .map(({ src, format, media }, index) => (
                <source
                  key={`${index}_${src}`}
                  srcSet={src}
                  type={formatToMimeType(format)}
                  media={media ? `(max-width: ${media}px)` : ''}
                  {...image.size}
                />
              ))
          : null}
        {renderImg(image, imageClassName, isMobile)}
      </picture>
    );
  },
);

const renderImg = (image: Picture, imageClassName = '', isMobile = false) => {
  const style = {
    width: image.size?.width ? `${image.size?.width}px` : '100%',
    height: image.size?.height ? `${image.size?.height}px` : '100%',
  };

  const title = image.title || '';
  const alt = image.alt || image.title;
  const imgStyle = isMobile ? 'm-auto' : 'm-0';

  return (
    <img
      src={image.src}
      className={`${imgStyle} ${imageClassName}`}
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
