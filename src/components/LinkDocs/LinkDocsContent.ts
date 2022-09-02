import type { LinkProps } from '../../model/LinkProps';
import type { AlignType } from '../BaseTile/BaseTileProps';
import type { ListOrientation } from '../../model/ListOrientation';
import type { Picture } from '../../model/Picture';

/**
 * @title Отображение списка
 * @enumNames [
 *    "Одна колонка",
 *    "Две колонки",
 *    ]
 */
export type LinkColumnsMode = 'single' | 'double';

/**
 * @title Элемент списка
 */
export interface LinkDocsItem extends LinkProps {
  /** @title размер файла */
  fileSize?: string;
}

/**
 * @title Список документов
 */
export interface LinkDocsContent {
  /** @title Заголовок */
  title?: string;
  /** @title Описание */
  subtitle?: string;
  /** @title Название иконки */
  icon?: Picture;
  /** @title Список */
  documents?: LinkDocsItem[];
  columnsMode?: LinkColumnsMode;
  /** @title Отображать элементы в моб. версии (прокрутка shift+mouseScroll) */
  orientation?: ListOrientation; // TODO: мобильный проп
  /** @title Рамка элементов (моб.) */ // TODO: мобильный проп
  hasBorder?: boolean;
  align?: AlignType;
}
