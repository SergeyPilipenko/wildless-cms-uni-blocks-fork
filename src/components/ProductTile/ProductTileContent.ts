import type { BlockVersion } from '../../model/BlockVersion';
import type { DescriptionProps, HeadlineProps, LabelProps } from '../../model/HeadlineType';
import type { Picture } from '../../model/Picture';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';

export type TextBenefit = DescriptionProps & LabelProps;

/**
 * @title Продуктовая плитка
 */
export type ProductTileContent = HeadlineProps &
  ButtonContent & {
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
    version?: BlockVersion;
    /**
     * @title Преимущества
     * @maxItems 7
     */
    benefits?: TextBenefit[];
    /** @title Дополнительное описание */
    additionalDescription?: string;
  };
