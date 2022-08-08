import type { HeadingContent } from '../../ui-kit/Heading/HeadingContent';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

export type TitleWithImageContent = HeadingContent & ImageContent;

/**
 * @title Картинка с текстом
 */
export interface PictureTextContent extends TitleWithImageContent {
  /** @title Список преимуществ */
  benefits?: Benefit[];
}
