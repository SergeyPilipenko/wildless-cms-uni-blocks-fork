import type { Picture } from '../../model/Picture';

/**
 * @title Вкладка
 */
export interface Tab {
  /** @title Имя вкладки */
  title?: string;
  /** @title Описание */
  description?: string;
  icon?: Picture;
}

export type TabClickHandler = (tabIndex: number) => void;

export interface TabsProps {
  tabs?: Tab[];
  currentTabIndex: number;
  onTabClick: TabClickHandler;
}
