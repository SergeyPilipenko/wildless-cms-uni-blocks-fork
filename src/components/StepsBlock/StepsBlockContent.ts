import type { IconName } from '../../icons/IconName';
import type { SizeVersion } from '../../model/SizeVersion';
import type { BlockVersion } from '../../model/BlockVersion';

/**
 * @title Шаг
 */
export interface Step {
  /** @title Название */
  label?: string;
  /** @title Описание */
  description?: string;
  icon?: IconName;
}

/**
 * @title Блок шаги
 */
export interface StepsBlockContent {
  /** @title Заголовок */
  title?: string;
  /** @title Описание */
  description?: string; // TODO: mobile content
  /** @title Линии */
  showLines?: boolean;
  /**
   * @title Шаги
   * @minItems 2
   * @maxItems 4
   */
  steps?: Step[];
  /** @title Размер шагов (моб.) */
  size?: SizeVersion; // TODO: mobile content
  version?: BlockVersion; // TODO: mobile content
}
