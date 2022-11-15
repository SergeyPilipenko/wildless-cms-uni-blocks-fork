import type { BlockVersion } from '../../model/BlockVersion';
import type { HeadlineCommonProps, TitleProps } from '../../model/HeadlineType';
import type { LinkCommonProps } from '../../model/LinkProps';
import type { Picture } from '../../model/Picture';
import type { ListContent } from '../../ui-kit/List/ListContent';

/**
 * @title Карточка
 */
export interface RecommendationCardTypes extends HeadlineCommonProps, ListContent {
  /**
   * @title Соц сети
   * @minItems 3
   * @default [
   * { "href": "https://t.me" },
   * { "href": "https://vk.com" },
   * { "href": "https://ok.ru" },
   * ]
   */
  socialMedia?: LinkCommonProps[];
  /**
   * @default {
   *   "format": "webp",
   *   "size": {
   *       "width": 290
   *   },
   *   "sources": [{
   *       "media": 1279,
   *       "width": 174,
   *       "format": "webp",
   *       "alignment": "southeast"
   *   }]
   * }
   */
  image?: Picture;
}

/**
 * @title Рекомендации
 */
export interface RecommendationContent extends TitleProps {
  /** @title Карточки */
  recommendations?: RecommendationCardTypes[];
  version?: BlockVersion;
}
