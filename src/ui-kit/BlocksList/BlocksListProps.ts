import type { GalleryContent } from '../../components/Gallery/GalleryContent';
import type { HeadlineContent } from '../../components/Headline/HeadlineContent';
import type { LinkDocsContent } from '../../components/LinkDocs/LinkDocsContent';
import type { LinkListContent } from '../../components/LinkList/LinkListContent';
import type { MiniGalleryContent } from '../../components/MiniGallery/MiniGalleryContent';
import type { PictureTextContent } from '../../components/PictureText/PictureTextContent';
import type { ProductBlockContent } from '../../components/ProductBlock/ProductBlockContent';
import type { ProductTileContent } from '../../components/ProductTile/ProductTileContent';
import type { TextBlockContent } from '../../components/TextBlock/TextBlockContent';
import type { TileContent } from '../../components/Tile/TileContent';
import type { EmptyOption } from '../../model/EmptyOptionType';

export interface ActiveHandler {
  blocks?: BlockDef[];
  initialState?: boolean;
}

export interface BlocksCommonProps {
  /**
   * @title Стиль
   * @default ["col-span-12"]
   **/
  style?: string[];
}

/**
 * @title Заголовок
 */
export type HeadlineBlockListDef = HeadlineContent &
  BlocksCommonProps & {
    /** @default Headline */
    blockListType: 'Headline';
  };

/**
 * @title Список документов
 */
export type LinkDocsBlockListDef = LinkDocsContent &
  BlocksCommonProps & {
    /** @default LinkDocs */
    blockListType: 'LinkDocs';
  };

/**
 * @title Текстовый блок
 */
export type TextBlockBlockListDef = TextBlockContent &
  BlocksCommonProps & {
    /** @default TextBlock */
    blockListType: 'TextBlock';
  };

/**
 * @title Картинка с текстом
 */
export type PictureTextBlockListDef = PictureTextContent &
  BlocksCommonProps & {
    /** @default PictureText */
    blockListType: 'PictureText';
  };

/**
 * @title Продуктовый блок
 */
export type ProductBlockBlockListDef = ProductBlockContent &
  BlocksCommonProps & {
    /** @default ProductBlock */
    blockListType: 'ProductBlock';
  };

/**
 * @title Плитка
 */
export type TileBlockListDef = TileContent &
  BlocksCommonProps & {
    /** @default Tile */
    blockListType: 'Tile';
  };

/**
 * @title Продуктовая плитка
 */
export type ProductTileBlockListDef = ProductTileContent &
  BlocksCommonProps & {
    /** @default ProductTile */
    blockListType: 'ProductTile';
  };

/**
 * @title Галерея
 */
export type GalleryBlockListDef = GalleryContent &
  BlocksCommonProps & {
    /** @default Gallery */
    blockListType: 'Gallery';
  };

/**
 * @title Мини-галлерея
 */
export type MiniGalleryBlockListDef = MiniGalleryContent &
  BlocksCommonProps & {
    /** @default MiniGallery */
    blockListType: 'MiniGallery';
  };

/**
 * @title Список ссылок
 */
export type LinkListBlockListDef = LinkListContent &
  BlocksCommonProps & {
    /** @default LinkList */
    blockListType: 'LinkList';
  };

/**
 * @title Содержимое блока
 */
export type BlockDef =
  | EmptyOption
  | HeadlineBlockListDef
  | LinkDocsBlockListDef
  | TextBlockBlockListDef
  | PictureTextBlockListDef
  | ProductBlockBlockListDef
  | TileBlockListDef
  | ProductTileBlockListDef
  | GalleryBlockListDef
  | MiniGalleryBlockListDef
  | LinkListBlockListDef;
