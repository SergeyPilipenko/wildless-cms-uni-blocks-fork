import type { ListContent } from './ListContent';

/**
 * @title Версия списка
 */
export type ListItemVersion = 'primary' | 'secondary' | 'gray';

/**
 * @title Содержимое списка
 */
export interface ListProps extends ListContent {
  className?: string;
  isDotted?: boolean;
  version?: ListItemVersion;
  itemClassName?: string;
}
