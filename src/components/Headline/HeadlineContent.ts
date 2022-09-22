import type { BlockVersionWithTransparent } from '../../model/BlockVersion';
import type { DescriptionContent } from '../../ui-kit/Description/DescriptionContent';
import type { HeadingContent, HeadingType } from '../../ui-kit/Heading/HeadingContent';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { AlignType } from '../../model/AlignType';

/**
 * @title Заголовок
 */
export type HeadlineContent = HeadingContent &
  DescriptionContent &
  ImageContent & {
    align?: AlignType;
    bgColorHeadline?: BlockVersionWithTransparent;
    headingType?: HeadingType;
  };
