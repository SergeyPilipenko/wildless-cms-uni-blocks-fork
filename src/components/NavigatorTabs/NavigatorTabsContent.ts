import type { LinkProps } from '../../model/LinkProps';

/**
 * @title Блок табов
 */
export interface NavigatorTabsContent {
  /**
   * @title Список табов
   * @minItems 3
   */
  navigatorTabs?: LinkProps[];
}
