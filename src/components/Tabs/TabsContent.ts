import type { LinkProps } from '../../model/LinkProps';
import type { TitleProps } from '../../model/HeadlineType';

/**
 * @title Группа
 */
export type GroupTab = TitleProps & {
  /** @default group */
  type: 'group';
  /** @title Тег */
  ref?: string;
};

/**
 * @title Ссылка
 */
export type LinkTab = LinkProps & {
  /** @default link */
  type: 'link';
};

/**
 * @title Таб
 * @default {
 *    "type": "group"
 * }
 */
export type Tab = GroupTab | LinkTab;

/**
 * @title Вкладки
 */
export interface TabsContent {
  /** @title Табы */
  tabs?: Tab[];
  /** @title Показывать счетчик блоков во вкладках */
  showCounter?: boolean;
}
