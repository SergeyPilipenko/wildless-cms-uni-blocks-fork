import type { BlockVersion } from '../../model/BlockVersion';
import type { DescriptionProps } from '../../model/HeadlineType';
import type { Picture } from '../../model/Picture';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import type { HeadingCommonProps } from '../../ui-kit/Heading/HeadingProps';
import type { ListContent } from '../../ui-kit/List/ListContent';
import type { ListItemSize } from '../../ui-kit/List/ListProps';
import type { TagsContent } from '../../ui-kit/Tags/TagsContent';

/**
 * @title Плитка
 */
export type TileContent = HeadingCommonProps &
  DescriptionProps &
  ListContent &
  ButtonContent &
  TagsContent & {
    /**
     * @default {
     *   "format": "webp",
     *   "size": {
     *       "width": 320
     *   },
     *   "sources": [{
     *       "media": 1279,
     *	     "width": 192,
     *       "format": "webp",
     *       "alignment": "southeast"
     *   }]
     * }
     */
    image?: Picture;
    /**
     *  @title Буллиты
     *  @default true
     */
    isDotted?: boolean;
    listItemSize?: ListItemSize;
    version?: BlockVersion;
  };
