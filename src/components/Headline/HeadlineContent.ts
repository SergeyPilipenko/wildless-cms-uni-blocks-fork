import type { BgColorVersion } from '../../model/BgColorVersion';
import type { Picture } from '../../model/Picture';
import type { AlignType, BaseTileTitleProps } from '../BaseTile/BaseTileProps';

/**
 * @title Заголовок
 */
export interface HeadlineContent extends BaseTileTitleProps {
  description?: string;
  image?: Picture;
  align?: AlignType;
  // TODO: image for mobile
  bgColor?: BgColorVersion;
}
