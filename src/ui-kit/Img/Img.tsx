import { JSX } from '@redneckz/uni-jsx';
import { ImgInner } from './ImgInner';

import type { Image, ImageProps } from './ImgProps';

export const Img = JSX<ImageProps<Image>>(
  ({ className = '', imageClassName, image, ...iconProps }) => {
    return (
      <ImgInner
        className={className}
        imageClassName={imageClassName}
        image={image}
        {...iconProps}
      />
    );
  },
);
