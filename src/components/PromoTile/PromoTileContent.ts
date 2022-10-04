import type { BlockVersion } from '../../model/BlockVersion';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import type { DescriptionProp } from '../../model/HeadlineType';
import type { HeadingCommonProps } from '../../ui-kit/Heading/HeadingProps';

/**
 * @title Акции
 */
export type PromoTileContent = HeadingCommonProps &
  DescriptionProp &
  ButtonContent & {
    /** @title Дата публикации */
    date?: string;
    version?: BlockVersion;
  };
