import type { GalleryContent } from '../../components/Gallery/GalleryContent';
import type { HeadlineContent } from '../../components/Headline/HeadlineContent';
import type { LinkDocsContent } from '../../components/LinkDocs/LinkDocsContent';
import type { MiniGalleryContent } from '../../components/MiniGallery/MiniGalleryContent';
import type { PictureTextContent } from '../../components/PictureText/PictureTextContent';
import type { ProductBlockContent } from '../../components/ProductBlock/ProductBlockContent';
import type { ProductTileContent } from '../../components/ProductTile/ProductTileContent';
import type { TextBlockContent } from '../../components/TextBlock/TextBlockContent';
import type { TileContent } from '../../components/Tile/TileContent';
import type { LinkListContent } from '../../components/LinkList/LinkListContent';

/**
 * @title Количество колонок
 * @enumNames ["1 колонка", "2 колонки"]
 */
export type ColumnsCount = 1 | 2;

/**
 * @title Тип блока
 */
export type BlockDefType =
  | 'Headline'
  | 'LinkDocs'
  | 'TextBlock'
  | 'PictureText'
  | 'Tile'
  | 'ProductTile'
  | 'ProductBlock'
  | 'Gallery'
  | 'MiniGallery'
  | 'LinkList';

interface BaseBlockDef {
  blockListType: BlockDefType;
}

/**
 * @title Заголовок
 */
export type HeadlineBlockListDef = HeadlineContent & BaseBlockDef;

/**
 * @title Список документов
 */
export type LinkDocsBlockListDef = LinkDocsContent & BaseBlockDef;

/**
 * @title Текстовый блок
 */
export type TextBlockBlockListDef = TextBlockContent & BaseBlockDef;

/**
 * @title Картинка с текстом
 */
export type PictureTextBlockListDef = PictureTextContent & BaseBlockDef;

/**
 * @title Продуктовый блок
 */
export type ProductBlockBlockListDef = ProductBlockContent & BaseBlockDef;

/**
 * @title Плитка
 */
export type TileBlockListDef = TileContent & BaseBlockDef;

/**
 * @title Продуктовая плитка
 */
export type ProductTileBlockListDef = ProductTileContent & BaseBlockDef;

/**
 * @title Галлерея
 */
export type GalleryBlockListDef = GalleryContent & BaseBlockDef;

/**
 * @title Мини-галлерея
 */
export type MiniGalleryBlockListDef = MiniGalleryContent & BaseBlockDef;

/**
 * @title Список ссылок
 */
export type LinkListBlockListDef = LinkListContent & BaseBlockDef;

/**
 * @title Выберите блок
 */
export type EmptyOption = null;

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
