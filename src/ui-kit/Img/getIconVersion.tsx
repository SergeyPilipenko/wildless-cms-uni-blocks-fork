import type { Image } from './ImgProps';

export function getIconVersion(image?: Image) {
  return typeof image === 'string' ? 'normal' : image?.iconVersion || 'normal';
}
