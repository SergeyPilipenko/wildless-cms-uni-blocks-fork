import { ContentPageContext } from '../../components/ContentPage/ContentPageContext';
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
  context: ContentPageContext;
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
 * @default {"blockListType": "Headline"}
 */
export type HeadlineBlockListDef = HeadlineContent &
  BlocksCommonProps & { blockListType: 'Headline' };

/**
 * @title Список документов
 * @default {"blockListType": "LinkDocs"}
 */
export type LinkDocsBlockListDef = LinkDocsContent &
  BlocksCommonProps & { blockListType: 'LinkDocs' };

/**
 * @title Текстовый блок
 * @default {"blockListType": "TextBlock"}
 */
export type TextBlockBlockListDef = TextBlockContent &
  BlocksCommonProps & { blockListType: 'TextBlock' };

/**
 * @title Картинка с текстом
 * @default {"blockListType": "PictureText"}
 */
export type PictureTextBlockListDef = PictureTextContent &
  BlocksCommonProps & { blockListType: 'PictureText' };

/**
 * @title Продуктовый блок
 * @default {"blockListType": "ProductBlock"}
 */
export type ProductBlockBlockListDef = ProductBlockContent &
  BlocksCommonProps & { blockListType: 'ProductBlock' };

/**
 * @title Плитка
 * @default {"blockListType": "Tile"}
 */
export type TileBlockListDef = TileContent & BlocksCommonProps & { blockListType: 'Tile' };

/**
 * @title Продуктовая плитка
 * @default {"blockListType": "ProductTile"}
 */
export type ProductTileBlockListDef = ProductTileContent &
  BlocksCommonProps & { blockListType: 'ProductTile' };

/**
 * @title Галерея
 * @default {"blockListType": "Gallery"}
 */
export type GalleryBlockListDef = GalleryContent & BlocksCommonProps & { blockListType: 'Gallery' };

/**
 * @title Мини-галлерея
 * @default {"blockListType": "MiniGallery"}
 */
export type MiniGalleryBlockListDef = MiniGalleryContent &
  BlocksCommonProps & { blockListType: 'MiniGallery' };

/**
 * @title Список ссылок
 * @default {"blockListType": "LinkList"}
 */
export type LinkListBlockListDef = LinkListContent &
  BlocksCommonProps & { blockListType: 'LinkList' };

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
