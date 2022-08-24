import type { BlockVersion } from '../../model/BlockVersion';
import type { DescriptionContent } from '../../ui-kit/Description/DescriptionContent';
import type { HeadingContent } from '../../ui-kit/Heading/HeadingContent';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { ListContent } from '../../ui-kit/List/ListContent';

export type RecommendationCardContent = HeadingContent &
  DescriptionContent &
  ListContent &
  ImageContent;

/**
 * @title Рекомендации
 */
export interface RecommendationContent extends HeadingContent {
  /** @title Карточки */
  cards?: RecommendationCardContent[];
  version?: BlockVersion;
}
