import { BlockVersion } from '../../model/BlockVersion';

export type StyleType = {
  background: string;
  title: string;
  description: string;
  iconBackground: string;
  iconConnector: string;
};

const STEPS_BLOCK_STYLE_MAPS: Record<BlockVersion, StyleType> = {
  primary: {
    background: 'bg-white',
    title: 'text-primary-text',
    description: 'text-secondary-text',
    iconBackground: 'bg-secondary-light',
    iconConnector: 'bg-secondary-light',
  },
  secondary: {
    background: 'bg-primary-main',
    title: 'text-white',
    description: 'text-white/80',
    iconBackground: 'bg-white/30',
    iconConnector: 'bg-white',
  },
};

export const getStyleMap = (version: BlockVersion): StyleType => STEPS_BLOCK_STYLE_MAPS[version];
