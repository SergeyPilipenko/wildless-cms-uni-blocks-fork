import { JSX } from '@redneckz/uni-jsx';
import { ImgInner } from './ImgInner';

import type { Image, ImageProps } from './ImgProps';

export const Img = JSX<ImageProps<Image>>(({ className = '', image }) => {
  return <ImgInner className={className} image={image} isMobile={true} />;
});
