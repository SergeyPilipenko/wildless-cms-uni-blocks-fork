import type { GroupBlockDef } from './BlocksTypeProps';

/**
 *  @title Таб
 */
export interface GroupBlockTab {
  /** @title Tег */
  tag?: string;
  /** @title Название */
  title?: string;
}

/**
 * @title Блок-группировки
 */
export interface GroupBlockContent {
  /** @title Блоки */
  groupBlocks?: GroupBlockDef[];
  /** @title Табы */
  tabs?: GroupBlockTab[];
  /** @title Показывать счетчик блоков во вкладках */
  isShowCounter?: boolean;
}
