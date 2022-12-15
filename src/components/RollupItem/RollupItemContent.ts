import type { BlockVersion } from '../../model/BlockVersion';
import type { LabelProps } from '../../model/HeadlineType';

/**
 * @title Сворачивающаяся секция
 */
export type RollupItemContent = LabelProps & {
  /** @title Отображать в раскрытом виде */
  isExpanded?: boolean;
  /** @title Кнопка сверху */
  isFoldButtonOnTop?: boolean;
  version?: BlockVersion;
};
