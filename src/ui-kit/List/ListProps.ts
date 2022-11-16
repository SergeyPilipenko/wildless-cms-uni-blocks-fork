import type { ListContent } from './ListContent';

/**
 * @title Размер пунктов списка
 * @enumNames ["Маленький", "Средний", "Большой"]
 */
export type ListItemSize = 'S' | 'M' | 'L';

/**
 * @title Версия списка
 * @enumNames ["Основной", "Второстепенный", "Серый"]
 */
export type ListItemVersion = 'primary' | 'secondary' | 'gray';

/**
 * @title Содержимое списка
 */
export interface ListProps extends ListContent {
  /** @hidden */
  className?: string;
  /** @title Отступ */
  hasIndent?: boolean;
  /** @hidden */
  itemClassName?: string;
  /** @title Буллиты */
  isDotted?: boolean;
  listItemSize?: ListItemSize;
  version?: ListItemVersion;
}
