import type { BlockVersion } from '../../model/BlockVersion';
import type { Picture } from '../../model/Picture';
import type { SizeVersion } from '../../model/SizeVersion';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';

/**
 * @title Шаг
 */
export interface Step {
  /** @title Название */
  label?: string;
  /** @title Описание */
  description?: string;
  /**
   *  @title Иконка
   *  @default
   * {
   *   "size": {
   *     "width": 48,
   *     "height": 48
   *   },
   *   "format": "webp"
   * }
   */
  icon?: Picture;
  /** @title Кнопка */
  button?: ButtonWithIconProps;
}

/**
 * @title Блок шаги
 */
export interface StepsBlockContent {
  /** @title Заголовок */
  title?: string;
  /** @title Описание */
  description?: string; // TODO: mobile content
  /**
   * @title Линии
   * @default true
   */
  showLines?: boolean;
  /**
   * @title Шаги
   * @minItems 2
   * @maxItems 4
   */
  steps?: Step[];
  /** @title Кнопка */
  button?: ButtonWithIconProps;
  /**
   * @title Размер шагов (моб.)
   * @default normal
   */
  size?: SizeVersion; // TODO: mobile content
  version?: BlockVersion;
}
