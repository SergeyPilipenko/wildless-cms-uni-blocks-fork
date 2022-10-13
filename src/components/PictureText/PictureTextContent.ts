import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { BenefitsProps } from '../../ui-kit/BenefitItem/BenefitItemProps';
import type { HeadlineCommonProps } from '../../model/HeadlineType';

export type TitleWithImageContent = HeadlineCommonProps & ImageContent;

/**
 * @title Картинка с текстом
 */
export interface PictureTextContent extends BenefitsProps, TitleWithImageContent {
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
