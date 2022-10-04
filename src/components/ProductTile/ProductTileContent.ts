import type { BlockVersion } from '../../model/BlockVersion';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import type { HeadlineProps } from '../../model/HeadlineType';
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
export type ProductTileContent = HeadlineProps &
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
