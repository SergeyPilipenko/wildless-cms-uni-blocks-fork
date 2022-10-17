import type { BlockVersion } from '../../model/BlockVersion';
import type { DescriptionProps } from '../../model/HeadlineType';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import type { HeadingCommonProps } from '../../ui-kit/Heading/HeadingProps';

/**
 * @title Акции
 */
export type PromoTileContent = HeadingCommonProps &
  DescriptionProps &
  ButtonContent & {
    /** @title Дата публикации */
    date?: string;
    version?: BlockVersion;
  };
