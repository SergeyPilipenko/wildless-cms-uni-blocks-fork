import type { BlockVersion } from '../../model/BlockVersion';
import type { LinkProps } from '../../model/LinkProps';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { ListContent } from '../../ui-kit/List/ListContent';
import type { HeadlineCommonProps, TitleProp } from '../../model/HeadlineType';

export interface RecommendationCardTypes extends HeadlineCommonProps, ListContent, ImageContent {
  /**
   * @title Соц сети
   * @minItems 3
   */
  socialMedia?: LinkProps[];
}

/**
 * @title Рекомендации
 */
export interface RecommendationContent extends TitleProp {
  /** @title Карточки */
  recommendations?: RecommendationCardTypes[];
  version?: BlockVersion;
}
