import type { BlockVersionWithTransparent } from '../../model/BlockVersion';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { AlignType } from '../../model/AlignType';
import type { HeadlineProps } from '../../model/HeadlineType';

/**
 * @title Заголовок
 */
export type HeadlineContent = HeadlineProps &
  ImageContent & {
    align?: AlignType;
    bgColorHeadline?: BlockVersionWithTransparent;
  };
