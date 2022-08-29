import type { ListContent } from './ListContent';

/**
 * @title Версия списка
 * @enumNames ["Основной", "Второстепенный", "Серый"]
 */
export type ListItemVersion = 'primary' | 'secondary' | 'gray';

/**
 * @title Содержимое списка
 */
export interface ListProps extends ListContent {
  className?: string;
  /** @title Буллиты */
  isDotted?: boolean;
  version?: ListItemVersion;
  itemClassName?: string;
}
