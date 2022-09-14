import type { Picture } from '../../model/Picture';
import { FuncSetNumber } from '../../types';

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

export type TabClickHandler = FuncSetNumber;

export interface TabsProps {
  tabs?: Tab[];
  currentTabIndex: number;
  onTabClick: TabClickHandler;
}
