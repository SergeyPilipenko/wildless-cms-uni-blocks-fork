import type { BgColorVersion } from '../../model/BgColorVersion';
import type { BaseTileCommonProps } from '../BaseTile/BaseTileProps';

/**
 * @title Заголовок
 */
export interface HeadlineContent
  extends Pick<BaseTileCommonProps, 'title' | 'headingType' | 'description' | 'align' | 'image'> {
  //TODO: image for mobile
  bgColor?: BgColorVersion;
}
