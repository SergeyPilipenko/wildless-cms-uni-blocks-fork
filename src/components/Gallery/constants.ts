import type { GalleryVersion } from '../../model/GalleryVersion';

export const galleryLengthForScrollMap: Record<GalleryVersion, number> = {
  normal: 3,
  mini: 4,
};

export const cardStyleMap: Record<GalleryVersion, string> = {
  normal: 'min-w-[364px] w-[364px]',
  mini: 'min-w-[260px] w-[260px]',
};

export const cardWidthMap: Record<GalleryVersion, number> = {
  normal: 380,
  mini: 276,
};
