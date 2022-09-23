import { BlockVersion } from '../../model/BlockVersion';
import type { HeadingContent } from '../../ui-kit/Heading/HeadingContent';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { Picture } from '../../model/Picture';

export type TitleWithImageContent = HeadingContent & ImageContent;

export interface PictureTextBenefit {
  icon?: Picture;
  /** @title Название */
  label?: string;
  /** @title Описание */
  description?: string;
}

/**
 * @title Картинка с текстом
 */
export interface PictureTextContent extends TitleWithImageContent {
  version?: BlockVersion;
  /** @title Список преимуществ */
  benefits?: PictureTextBenefit[];
  /**
   * @title Картинка справа/текст слева
   * @default false
   */
  directionRight?: boolean;
}
