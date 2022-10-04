import type { LinkProps } from '../../model/LinkProps';
import type { AlignType } from '../../model/AlignType';
import type { ListOrientation } from '../../model/ListOrientation';
import type { Picture } from '../../model/Picture';
import type { HeadlineProps } from '../../model/HeadlineType';

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
export type LinkDocsContent = HeadlineProps & {
  /**
   *  @title Иконка
   *  @default {
   *   "size": {
   *     "width": 24,
   *     "height": 24
   *   },
   *   "format": "webp"
   * }
   */
  icon?: Picture;
  /** @title Список */
  documents?: LinkDocsItem[];
  columnsMode?: LinkColumnsMode;
  /** @title Отображать элементы в моб. версии (прокрутка shift+mouseScroll) */
  orientation?: ListOrientation; // TODO: мобильный проп
  /** @title Рамка элементов (моб.) */ // TODO: мобильный проп
  hasBorder?: boolean;
  align?: AlignType;
};
