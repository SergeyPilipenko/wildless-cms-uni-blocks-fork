import type { BgColorVersion } from '../../model/BgColorVersion';
import type { DescriptionContent } from '../../ui-kit/Description/DescriptionProps';
import type { HeadingContent } from '../../ui-kit/Heading/HeadingContent';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { AlignType } from '../BaseTile/BaseTileProps';

/**
 * @title Заголовок
 */
export type HeadlineContent = HeadingContent &
  DescriptionContent &
  ImageContent & {
    align?: AlignType;
    // TODO: image for mobile
    bgColor?: BgColorVersion;
  };
