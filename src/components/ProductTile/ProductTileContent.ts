import type { BlockVersion } from '../../model/BlockVersion';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import type { DescriptionContent } from '../../ui-kit/Description/DescriptionContent';
import type { HeadingContent, HeadingTypeContent } from '../../ui-kit/Heading/HeadingContent';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { TextBenefit } from '../BenefitsBlock/BenefitsBlockContent';

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
  };
