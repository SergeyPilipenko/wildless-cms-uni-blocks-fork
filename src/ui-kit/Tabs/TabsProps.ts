import type { Picture } from '../../model/Picture';
import { FuncReturnVoid } from '../../types';

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

export type TabClickHandler = FuncReturnVoid<number>;

export interface TabsProps {
  tabs?: Tab[];
  currentTabIndex: number;
  onTabClick: TabClickHandler;
}
