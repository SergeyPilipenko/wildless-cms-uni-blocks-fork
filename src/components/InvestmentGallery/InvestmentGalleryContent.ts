import type { BlockVersion } from '../../model/BlockVersion';
import type { Picture } from '../../model/Picture';
import type { HeadlineCommonProps, TitleProps } from '../../model/HeadlineType';

/**
 * @title Количество колонок в списке
 * @enumNames [
 *   "1 колонка",
 *   "2 колонки",
 *  ]
 */
export type CardColumnsMode = 'single' | 'double';

/**
 * @title Карточка
 */
export interface InvestmentGalleryCardTypes extends HeadlineCommonProps {
  /** @title Доп. описание карточки  */
  additionalDescription?: string;
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
  columnsMode?: CardColumnsMode;
  /** @title Описание пункта */
  cardList?: CardListItem[];
}

export interface CardListItem {
  /** @title Параметр */
  parameter?: string;
  /** @title Описание */
  parameterDesccription?: string;
}

/**
 * @title Карточка
 */
export interface InvestmentGalleryContent extends TitleProps {
  /** @title Карточки */
  cards?: InvestmentGalleryCardTypes[];
  version?: BlockVersion;
}
