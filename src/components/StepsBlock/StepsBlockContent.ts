import type { BlockVersion } from '../../model/BlockVersion';
import type { DescriptionProps, HeadlineCommonProps, LabelProps } from '../../model/HeadlineType';
import type { IconProps } from '../../model/Picture';
import type { SizeVersion } from '../../model/SizeVersion';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';

/**
 * @title Шаг
 */
export type Step = DescriptionProps &
  LabelProps &
  IconProps & {
    /** @title Кнопка */
    button?: ButtonWithIconProps;
    /**
     * @title Буллиты
     * @default true
     */
    isDotted?: boolean;
    /** @title Список */
    items?: string[];
  };

/**
 * @title Блок шаги
 */
export type StepsBlockContent = HeadlineCommonProps & {
  /**
   * @title Линии
   * @default true
   */
  showLines?: boolean;
  /**
   * @title Шаги
   * @minItems 2
   * @maxItems 5
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
};
