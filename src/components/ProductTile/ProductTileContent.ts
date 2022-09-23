import type { BlockVersion } from '../../model/BlockVersion';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import type { DescriptionContent } from '../../ui-kit/Description/DescriptionContent';
import type { HeadingContent, HeadingTypeContent } from '../../ui-kit/Heading/HeadingContent';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';

export interface TextBenefit {
  /** @title Название */
  label?: string;
  /** @title Описание */
  description?: string;
}

/**
 * @title Продуктовая плитка
 */
export type ProductTileContent = HeadingContent &
  HeadingTypeContent &
  DescriptionContent &
  ButtonContent &
  ImageContent & {
    version?: BlockVersion;
    /**
     * @title Преимущества
     * @maxItems 7
     */
    benefits?: TextBenefit[];
    /** @title Дополнительное описание */
    additionalDescription?: string;
  };
