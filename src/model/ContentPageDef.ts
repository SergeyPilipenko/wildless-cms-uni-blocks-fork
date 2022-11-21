import type { BlockVersion } from './BlockVersion';

/**
 * @title Цветовая палитра
 * @enumNames ["", "Частным клиентам", "Бизнес клиентам", "Экосистема Своё"]
 */
export type ColorPalette = '' | 'pc' | 'bc' | 'eo';

export interface BaseBlockDef extends Slot {
  type?: string;
  content?: Record<string, any>;
  version?: BlockVersion;
  hidden?: boolean;
  anchor?: string;
  labels?: string[];
}

export interface BlockDef extends BaseBlockDef {
  mobile?: BaseBlockDef;
}

export interface Slot {
  style?: string[];
  blocks?: BlockDef[];
}

export interface SlotsMap {
  header?: Slot;
}

export interface ContentPageMeta {
  title?: string;
  slug?: string;
  main?: {
    description?: string;
    keywords?: string[];
    canonical?: string;
    robots?: string[];
  };
  og?: Record<string, string>;
  twitter?: Record<string, string>;
  jsonLd?: string;
}

export interface ContentPageDef extends ContentPageMeta, Slot {
  _customPageType?: string;
  slots?: SlotsMap;
  fallback?: Record<string, unknown>;
  likeControl?: boolean;
  colorPalette?: ColorPalette;
}
