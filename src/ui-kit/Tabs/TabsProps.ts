import type { IconName } from '../../icons/IconName';

/**
 * @title Вкладка
 */
export interface Tab {
  /** @title Имя вкладки */
  title?: string;
  /** @title Описание */
  description?: string;
  icon?: IconName;
}

export type TabClickHandler = (value: number) => void;

export interface TabsProps {
  tabs?: Tab[];
  currentTabIndex: number;
  onTabClick: TabClickHandler;
}
