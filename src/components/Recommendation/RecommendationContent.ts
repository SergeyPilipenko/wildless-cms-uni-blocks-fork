import type { BlockVersion } from '../../model/BlockVersion';
import type { LinkProps } from '../../model/LinkProps';
import type { DescriptionContent } from '../../ui-kit/Description/DescriptionContent';
import type { HeadingContent } from '../../ui-kit/Heading/HeadingContent';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { ListContent } from '../../ui-kit/List/ListContent';

export type RecommendationCardTypes = HeadingContent &
  DescriptionContent &
  ListContent &
  ImageContent &
  RecommendationContent;
/**
 * @title Рекомендации
 */
export interface RecommendationContent extends HeadingContent {
  /** @title Карточки */
  recommendations?: RecommendationCardTypes[];
  version?: BlockVersion;
  socialMedia?: LinkProps[];
}
