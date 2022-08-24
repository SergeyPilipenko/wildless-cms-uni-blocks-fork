import type { AlignType } from '../BaseTile/BaseTileProps';
import type { BlockVersionWithTransparent } from '../../model/BlockVersion';

export const ALIGN_TEXT: Record<AlignType, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const BACKGROUND_COLOR: Record<BlockVersionWithTransparent, string> = {
  transparent: 'bg-transparent',
  primary: 'bg-white',
  secondary: 'bg-primary-main',
};
