import type { Picture } from '../../model/Picture';

export interface ImageContent {
  image?: Picture;
}

export interface ImageProps extends ImageContent {
  className?: string;
}
