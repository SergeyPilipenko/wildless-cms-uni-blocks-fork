import type { LinkProps } from '../../model/LinkProps';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import type { AlignType } from '../BaseTile/BaseTileProps';
import type { ListOrientation } from '../../model/ListOrientation';

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
  icon?: IconName;
  /** @title Список */
  documents?: LinkDocsItem[];
  columnsMode?: LinkColumnsMode;
  /** @title Отображать элементы в моб. версии (прокрутка shift+mouseScroll) */
  listMode?: ListOrientation; // TODO: мобильный проп
  /** @title Рамка элементов (моб.) */ // TODO: мобильный проп
  hasBorder?: boolean;
  align?: AlignType;
}
