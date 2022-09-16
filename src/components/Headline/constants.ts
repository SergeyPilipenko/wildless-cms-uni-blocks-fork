import type { AlignType } from '../../model/AlignType';
import type { BlockVersionWithTransparent } from '../../model/BlockVersion';

export const ALIGN_TEXT: Record<AlignType, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

type StyleType = {
  background: string;
  text: string;
  description: string;
};

export const HEADLINE_BLOCK_STYLE_MAPS: Record<BlockVersionWithTransparent, StyleType> = {
  transparent: {
    background: 'bg-transparent',
    text: 'text-primary-text',
    description: 'text-primary-text',
  },
  primary: {
    background: 'bg-white',
    text: 'text-primary-text',
    description: 'text-primary-text',
  },
  secondary: {
    background: 'bg-primary-main',
    text: 'text-white',
    description: 'text-white/80',
  },
};
