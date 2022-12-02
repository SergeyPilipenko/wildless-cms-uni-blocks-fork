import type { AlignType } from '../../model/AlignType';
import type { BlockVersionWithTransparent } from '../../model/BlockVersion';
import type { HeadlineProps } from '../../model/HeadlineType';
import type { Picture } from '../../model/Picture';
import type { HeadingTagType } from '../../ui-kit/Heading/HeadingProps';

/**
 * @title Заголовок
 */
export type HeadlineContent = HeadlineProps & {
  /** @title Изображение (моб.) */
  image?: Picture;
  align?: AlignType;
  bgColorHeadline?: BlockVersionWithTransparent;
  /** @hidden */
  as?: HeadingTagType;
};
