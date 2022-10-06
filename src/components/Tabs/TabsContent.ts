/**
 *  @title Таб
 */
export interface Tab {
  /** @title Tег */
  id?: string;
  /** @title Название */
  title?: string;
}

/**
 * @title Вкладки
 */
export interface TabsContent {
  /** @title Табы */
  tabs?: Tab[];
  /** @title Показывать счетчик блоков во вкладках */
  showCounter?: boolean;
}
