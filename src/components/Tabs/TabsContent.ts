import type { TitleProps } from '../../model/HeadlineType';
import type { LinkProps } from '../../model/LinkProps';

/**
 * @title Группа
 */
export type GroupTabData = TitleProps & {
  /** @default group */
  type: 'group';
  /** @title Тег */
  ref?: string;
};

/**
 * @title Ссылка
 */
export type LinkTabData = LinkProps & {
  /** @default link */
  type: 'link';
};

/**
 * @title Таб
 * @default {
 *    "type": "group"
 * }
 */
export type TabData = GroupTabData | LinkTabData;

/**
 * @title Вкладки
 */
export interface TabsContent {
  /** @title Табы */
  tabs?: TabData[];
  /** @title Закрепить сверху */
  isSticky?: boolean;
  /** @title Показывать счетчик блоков во вкладках */
  showCounter?: boolean;
}
