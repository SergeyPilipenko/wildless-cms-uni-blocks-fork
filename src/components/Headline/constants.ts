import type { BlockVersionWithTransparent } from '../../model/BlockVersion';
import type { HeadlineSmallVersion, HeadlineVersion } from '../../model/HeadlineType';
import type { HeadingTagType, HeadingType } from '../../ui-kit/Heading/HeadingProps';

type StyleType = {
  background: string;
  text: string;
  description: string;
};

type VersionStyleType = {
  descriptionFont: string;
  gap: string;
  headingType: HeadingType;
  as: HeadingTagType;
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

export const HEADLINE_VERSION: Record<HeadlineVersion, VersionStyleType> = {
  XXL: {
    descriptionFont: 'text-h5',
    gap: 'gap-[18px]',
    headingType: 'h0', // 56
    as: 'h1',
  },
  XL: {
    descriptionFont: 'text-xl-light',
    gap: 'gap-4',
    headingType: 'h1', // 50
    as: 'h1',
  },
  L: {
    descriptionFont: 'text-xl-light',
    gap: 'gap-4',
    headingType: 'h2', // 40
    as: 'h2',
  },
  M: {
    descriptionFont: 'text-xl-light',
    gap: 'gap-3',
    headingType: 'h3', // 32
    as: 'h3',
  },
  S: {
    descriptionFont: 'text-xl-light',
    gap: 'gap-2',
    headingType: 'h4',
    as: 'h4',
  },
};

export const HEADLINE_SMALL_VERSION: Record<HeadlineSmallVersion, string> = {
  XL_L: 'text-xl-light',
  XL_R: 'text-xl',
  L_L: 'text-l-light',
  L_R: 'text-l',
  M: 'text-m-light',
  S: 'text-s-light',
  XS: 'text-xs-light',
};
