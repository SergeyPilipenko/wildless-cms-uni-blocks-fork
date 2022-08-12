import type { BlockContent } from './components/BlockContent';
import type { ContentPageContext } from './components/ContentPage/ContentPageContext';
import type { BlockVersion } from './model/BlockVersion';

export type ColorPalette = 'pc' | 'bc' | 'eo' | 'eo2' | 'eo3' | 'eo4';

export interface BaseBlockDef {
  type?: string;
  style?: string[];
  content?: BlockContent;
  version?: BlockVersion;
  hidden?: boolean;
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
  title: string;
  slug: string;
  main: ContentPageMetaMain;
  og?: Record<string, string>;
  twitter?: Record<string, string>;
  jsonLd?: string;
}

export interface ContentPageMetaMain {
  description?: string;
  keywords?: string[];
  canonical?: string;
  robots?: string[];
}

export interface ContentPageDef extends ContentPageMeta {
  style?: string[];
  blocks?: BlockDef[]; //! for compatibility
  slots?: SlotsMap;
  likeControl?: boolean;
  colorPalette?: ColorPalette;
}

export interface UniBlockProps {
  className?: string;
  context: ContentPageContext;
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
