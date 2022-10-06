import type { BlockContent } from './components/BlockContent';
import type { ContentPageContext } from './components/ContentPage/ContentPageContext';
import type { BlockVersion } from './model/BlockVersion';

/**
 * @title Цветовая палитра
 * @enumNames ["", "Частным клиентам", "Бизнес клиентам", "Экосистема Своё"]
 */
export type ColorPalette = '' | 'pc' | 'bc' | 'eo';

export interface BaseBlockDef {
  type?: string;
  style?: string[];
  content?: BlockContent;
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

export interface ContentPageDef extends ContentPageMeta {
  _customPageType?: string;
  style?: string[];
  blocks?: BlockDef[];
  slots?: SlotsMap;
  likeControl?: boolean;
  colorPalette?: ColorPalette;
}

export interface UniBlockProps {
  className?: string;
  context: ContentPageContext;
  page?: ContentPageDef;
  labels?: string[];
  anchor?: string;
}

export interface DaDataResult {
  suggestions?: DaDataSuggestion<DaDataAddress>[];
}

export interface DaDataSuggestion<T> {
  value?: string;
  unrestricted_value?: string;
  data?: T;
}

export interface DaDataAddress {
  city?: string | null;
}
