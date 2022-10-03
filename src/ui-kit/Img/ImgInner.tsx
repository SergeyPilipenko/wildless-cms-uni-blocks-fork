import { JSX } from '@redneckz/uni-jsx';
import type { Picture } from '../../model/Picture';
import { Icon } from '../Icon/Icon';
import { getIconVersion } from './getIconVersion';
import { ImgAsPicture } from './ImgAsPicture';
import type { Image, ImageProps } from './ImgProps';

export const ImgInner = JSX<ImageProps<Image>>(
  ({ className = '', image, imageClassName = '', isMobile, ...iconProps }) => {
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
        isMobile={isMobile}
      />
    );
  },
);
