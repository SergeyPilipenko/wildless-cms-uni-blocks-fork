import type { BlockVersion } from '../../model/BlockVersion';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import type { DescriptionContent } from '../../ui-kit/Description/DescriptionContent';
import type { HeadingContent } from '../../ui-kit/Heading/HeadingContent';

/**
 * @title Акции
 */
export type PromoTileContent = HeadingContent &
  DescriptionContent &
  ButtonContent & {
    /** @title Дата публикации */
    date?: string;
    version?: BlockVersion;
  };
