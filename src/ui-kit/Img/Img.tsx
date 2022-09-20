import { JSX } from '@redneckz/uni-jsx';
import type { ImgSource, Picture } from '../../model/Picture';
import { Icon } from '../Icon/Icon';
import { getIconVersion } from './getIconVersion';
import type { Image, ImageProps } from './ImgProps';

export const Img = JSX<ImageProps<Image>>(
  ({ className = '', image, imageClassName = '', ...iconProps }) => {
    if (!image) {
      return null;
    }

    // backwards compatibility with existing icons in usage
    const icon = typeof image === 'string' ? image : image.icon;
    if (icon || icon === '') {
      return icon.length ? (
        <Icon
          className={className}
          imageClassName={imageClassName}
          iconVersion={getIconVersion(image)}
          name={icon}
          {...iconProps}
        />
      ) : null;
    }

    return (
      <ImgAsPicture
        className={className}
        imageClassName={imageClassName}
        image={image as Picture}
      />
    );
  },
);

export const ImgAsPicture = JSX<ImageProps<Picture>>(
  ({ className = '', image, imageClassName = '' }) => {
    if (!image) {
      return null;
    }

    return (
      <picture className={`flex-none ${className}`}>
        {image?.sources?.length
          ? image.sources.map(({ src, format }, index) => (
              <source key={`${index}_${src}`} srcSet={src} type={formatToMimeType(format)} />
            ))
          : null}
        {renderImg(image, imageClassName)}
      </picture>
    );
  },
);

const renderImg = (image: Picture, imageClassName = '') => {
  const style = {
    width: image.size?.width ? `${image.size?.width}px` : '100%',
    height: image.size?.height ? `${image.size?.height}px` : '100%',
  };
  const title = image.title || '';
  const alt = image.alt || image.title;

  return (
    <img
      src={image.src}
      className={imageClassName}
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
