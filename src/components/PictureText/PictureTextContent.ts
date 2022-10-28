import type { HeadlineCommonProps } from '../../model/HeadlineType';
import type { Picture } from '../../model/Picture';
import type { BenefitsProps } from '../../ui-kit/BenefitItem/BenefitItemProps';

/**
 * @title Картинка с текстом
 */
export interface PictureTextContent extends BenefitsProps, HeadlineCommonProps {
  /**
   * @default {
   *   "format": "webp",
   *   "size": {
   *       "width": 400
   *   },
   *   "sources": [{
   *       "media": 1279,
   *       "width": 240,
   *       "format": "webp",
   *       "alignment": "center"
   *   }]
   * }
   */
  image?: Picture;
  /**
   * @title Картинка справа/текст слева
   * @default false
   */
  directionRight?: boolean;
  /** @title Ежемесячный лимит */
  monthLimit?: number;
  /** @title Страховая сумма */
  sum?: number;
}
