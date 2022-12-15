import type { CarouselCardVersion } from '../../model/CarouselCardVersion';

export const cardStyleMap: Record<CarouselCardVersion, string> = {
  normal: 'min-w-[100%] justify-center items-center m-7 col-span-12',
  mini: 'min-w-auto justify-center items-center m-9 col-span-4',
};

export const cardWidthMap: Record<CarouselCardVersion, string> = {
  normal: 'w-[1007px]',
  mini: 'w-[350px]',
};
