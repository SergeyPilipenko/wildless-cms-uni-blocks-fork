import type { Picture } from '../model/Picture';

export function isPictureSizeEmpty(size: Picture['size']): boolean {
  return !(size?.width || size?.height);
}
