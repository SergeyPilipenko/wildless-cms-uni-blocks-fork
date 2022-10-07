export type TabType = 'group' | 'link';

/**
 *  @title Таб
 */
export interface Tab {
  /** @title Тег или ссылка */
  ref?: string;
  /**
   * @title Тип
   * @enumNames ['Группирующий', 'Ссылочный']
   */
  type?: TabType;
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
