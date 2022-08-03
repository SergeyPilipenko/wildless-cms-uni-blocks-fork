import { LinkProps } from '../../model/LinkProps';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import { AlignType } from '../BaseTile/BaseTileProps';

/** @title Режим отображения списка */
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
  columnsMode?: LinkColumnsMode;
  /** @title Название иконки */
  icon?: IconName;
  /** @title Список */
  documents?: LinkDocsItem[];
  align?: AlignType;
}
