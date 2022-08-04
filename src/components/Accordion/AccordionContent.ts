import type { HeadlineContent } from '../Headline/HeadlineContent';
import type { LinkDocsContent } from '../LinkDocs/LinkDocsContent';
import type { PictureTextContent } from '../PictureText/PictureTextContent';
import type { TextBlockContent } from '../TextBlock/TextBlockContent';
import type { TileContent } from '../Tile/TileContent';
import type { ProductTileContent } from '../ProductTile/ProductTileContent';
import type { GalleryContent } from '../Gallery/GalleryContent';
import type { MiniGalleryContent } from '../MiniGallery/MiniGalleryContent';

/**
 * @title Тип блока
 */
export type AccordionBlockType =
  | 'Headline'
  | 'LinkDocs'
  | 'PictureText'
  | 'TextBlock'
  | 'Tile'
  | 'ProductTile'
  | 'Gallery'
  | 'MiniGallery';

interface AccordionBlockDef {
  accordionBlockType: AccordionBlockType;
}

/**
 * @title Заголовок
 */
export type HeadlineAccordionBlockDef = TileContent & AccordionBlockDef;

/**
 * @title Список документов
 */
export type LinkDocsAccordionBlockDef = TileContent & AccordionBlockDef;

/**
 * @title Текстовый блок
 */
export type TextBlockAccordionBlockDef = TileContent & AccordionBlockDef;

/**
 * @title Картинка с текстом
 */
export type PictureTextAccordionBlockDef = TileContent & AccordionBlockDef;

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
export type GalleryAccordionBlockDef = TileContent & AccordionBlockDef;

/**
 * @title Мини-галлерея
 */
export type MiniGalleryAccordionBlockDef = TileContent & AccordionBlockDef;

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
  | MiniGalleryAccordionBlockDef;

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
