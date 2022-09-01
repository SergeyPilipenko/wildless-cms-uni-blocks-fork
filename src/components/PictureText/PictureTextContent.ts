import { BlockVersion } from '../../model/BlockVersion';
import type { HeadingContent } from '../../ui-kit/Heading/HeadingContent';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

export type TitleWithImageContent = HeadingContent & ImageContent;

/**
 * @title Картинка с текстом
 */
export interface PictureTextContent extends TitleWithImageContent {
  version?: BlockVersion;
  /** @title Список преимуществ */
  benefits?: Benefit[];
  /**
   * @title Картинка справа/текст слева
   * @default false
   */
  directionRight?: boolean;
}
