/**
 * @title Таб
 */
export interface NavigatorTab {
  /** @title Название */
  label?: string;
  /** @title Якорь */
  anchor?: string;
}

/**
 * @title Блок табов
 */
export interface NavigatorTabsContent {
  /**
   * @title Список табов
   * @minItems 3
   */
  navigatorTabs?: NavigatorTab[];
}
