import type { BlockVersion } from '../../model/BlockVersion';

export type StyleType = {
  background: string;
  title: string;
  description: string;
  iconText: string;
  iconBackground: string;
  iconConnector: string;
};

export const STEPS_BLOCK_STYLE_MAPS: Record<BlockVersion, StyleType> = {
  primary: {
    background: 'bg-white',
    title: 'text-primary-text',
    description: 'text-secondary-text',
    iconText: 'text-secondary-text',
    iconBackground: 'bg-main-divider',
    iconConnector: 'bg-secondary-light',
  },
  secondary: {
    background: 'bg-primary-main',
    title: 'text-white',
    description: 'text-white/80',
    iconText: 'text-white',
    iconBackground: 'bg-white/30',
    iconConnector: 'bg-white',
  },
};
