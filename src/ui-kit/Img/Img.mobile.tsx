import { JSX } from '@redneckz/uni-jsx';
import { ImgInner } from './ImgInner';

import type { Image, ImageProps } from './ImgProps';

export const Img = JSX<ImageProps<Image>>((props) => <ImgInner {...props} isMobile={true} />);
