import { BlockVersion } from '../../model/BlockVersion';
import type { TitleProp } from '../../model/HeadlineType';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { Picture } from '../../model/Picture';

export type TitleWithImageContent = TitleProp & ImageContent;

export interface PictureTextBenefit {
  /** @title Иконка */
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
