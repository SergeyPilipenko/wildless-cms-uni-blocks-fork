import type { BlockVersion } from '../../model/BlockVersion';
import type { HeadlineProps } from '../../model/HeadlineType';
import type { IconVersion } from '../../model/IconVersion';
import type { LinkProps } from '../../model/LinkProps';
import type { Picture } from '../../model/Picture';
import type { BenefitItemProps } from '../../ui-kit/BenefitItem/BenefitItemProps';
import type { BackwardButtonProps, ButtonContent } from '../../ui-kit/Button/ButtonProps';
import type { ListContent } from '../../ui-kit/List/ListContent';

export type ProductBlockInnerContent = HeadlineProps &
  ListContent &
  ButtonContent & {
    /**
     * @default {
     *   "format": "webp",
     *   "size": {
     *       "width": 600
     *   },
     *   "sources": [{
     *       "media": 1279,
     *	     "width": 360,
     *       "format": "webp",
     *       "alignment": "northeast"
     *   }]
     * }
     */
    image?: Picture;
    /**
     * @title Список преимуществ
     * @minItems 2
     * @maxItems 3
     */
    benefits?: BenefitItemProps[];
    benefitsVersion?: IconVersion;
    version?: BlockVersion;
    /**
     *  @title Буллиты
     *  @default true
     */
    isDotted?: boolean;
    /** @title Лейбл (моб.) */
    label?: string;
    /**
     * @title Стиль для текстовой части
     * @hidden
     */
    textBlockClassName?: string;
  };

/**
 * @title Продуктовый блок
 */
export interface ProductBlockContent extends ProductBlockInnerContent {
  /** @title Хлебные крошки */
  breadcrumbs?: LinkProps[];
  /** @title Кнопка возврата */
  backwardButton?: BackwardButtonProps;
}
