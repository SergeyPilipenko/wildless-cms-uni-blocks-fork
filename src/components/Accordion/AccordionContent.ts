import type { GalleryContent } from '../Gallery/GalleryContent';
import type { HeadlineContent } from '../Headline/HeadlineContent';
import type { LinkDocsContent } from '../LinkDocs/LinkDocsContent';
import type { MiniGalleryContent } from '../MiniGallery/MiniGalleryContent';
import type { PictureTextContent } from '../PictureText/PictureTextContent';
import type { ProductTileContent } from '../ProductTile/ProductTileContent';
import type { TextBlockContent } from '../TextBlock/TextBlockContent';
import type { TileContent } from '../Tile/TileContent';
import type { LinkListContent } from '../LinkList/LinkListContent';

/**
 * @title Тип блока
 */
export type AccordionBlockType =
  | 'Headline'
  | 'LinkDocs'
  | 'TextBlock'
  | 'PictureText'
  | 'Tile'
  | 'ProductTile'
  | 'Gallery'
  | 'MiniGallery'
  | 'LinkList';

interface AccordionBlockDef {
  accordionBlockType: AccordionBlockType;
}

/**
 * @title Заголовок
 */
export type HeadlineAccordionBlockDef = HeadlineContent & AccordionBlockDef;

/**
 * @title Список документов
 */
export type LinkDocsAccordionBlockDef = LinkDocsContent & AccordionBlockDef;

/**
 * @title Текстовый блок
 */
export type TextBlockAccordionBlockDef = TextBlockContent & AccordionBlockDef;

/**
 * @title Картинка с текстом
 */
export type PictureTextAccordionBlockDef = PictureTextContent & AccordionBlockDef;

/**
 * @title Плитка
 */
export type TileAccordionBlockDef = TileContent & AccordionBlockDef;

/**
 * @title Продуктовая плитка
 */
export type ProductTileAccordionBlockDef = ProductTileContent & AccordionBlockDef;

/**
 * @title Галлерея
 */
export type GalleryAccordionBlockDef = GalleryContent & AccordionBlockDef;

/**
 * @title Мини-галлерея
 */
export type MiniGalleryAccordionBlockDef = MiniGalleryContent & AccordionBlockDef;

/**
 * @title Список ссылок
 */
export type LinkListAccordionBlockDef = LinkListContent & AccordionBlockDef;

/**
 * @title Выберите блок
 */
export type EmptyOption = null;

/**
 * @title Содержимое аккордеона
 */
export type AccordionBlockProps =
  | EmptyOption
  | HeadlineAccordionBlockDef
  | LinkDocsAccordionBlockDef
  | TextBlockAccordionBlockDef
  | PictureTextAccordionBlockDef
  | TileAccordionBlockDef
  | ProductTileAccordionBlockDef
  | GalleryAccordionBlockDef
  | MiniGalleryAccordionBlockDef
  | LinkListAccordionBlockDef;

/**
 * @title Элемент списка
 */
export interface AccordionItemCommonProps {
  /**
   * @title Название
   * @default Список
   */
  label?: string;
  /** @title Блоки */
  blocks?: AccordionBlockProps[];
  /**
   * @title Отображать/скрывать обводку элемента
   * @default false
   */
  bordered?: boolean; // TODO: только для мобильной версии
}

/**
 * @title Аккордеон
 */
export interface AccordionContent {
  /** @title Заголовок */
  title?: string;
  /** @title Список */
  accordionItems?: AccordionItemCommonProps[];
  /** @title Подзаголовок */
  description?: string; // TODO: только для мобильной версии
  /**
   * @title Отображать/скрывать обводку у элемента списка
   * @default false
   */
  bordered?: boolean; // TODO: только для мобильной версии
}
