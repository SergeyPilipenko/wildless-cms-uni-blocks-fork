import { JSX } from '@redneckz/uni-jsx';
import type { ImgSource, Picture } from '../../model/Picture';
import { Icon } from '../Icon/Icon';
import type { Image, ImageProps } from './ImgProps';

export const Img = JSX<ImageProps<Image>>(
  ({ className = '', image, imageClassName = '', ...iconProps }) => {
    // backwards compatibility with existing icons in usage
    const icon = typeof image === 'string' ? image : image?.icon;
    if (icon || icon === '') {
      return <Icon className={className} name={icon} {...iconProps} />;
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
      <picture className={className}>
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
