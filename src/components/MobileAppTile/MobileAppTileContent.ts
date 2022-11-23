import type { AlignType } from '../../model/AlignType';
import type { BlockVersion } from '../../model/BlockVersion';
import type { HeadlineCommonProps } from '../../model/HeadlineType';
import type { Picture } from '../../model/Picture';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import type { HeadingCommonProps } from '../../ui-kit/Heading/HeadingProps';
import type { ListContent } from '../../ui-kit/List/ListContent';

/**
 * @title Мобильное приложение
 */
export type MobileAppTileContent = HeadlineCommonProps &
  HeadingCommonProps &
  ButtonContent &
  ListContent & {
    /**
     * @title Выравнивание заголовка
     * @default left
     */
    alignTitle?: AlignType;
    // TODO: description для мобильной версии
    /** @title QR-код */
    qr?: Picture;
    /** @title Ссылка */
    href?: string; // TODO: для мобильной версии
    version?: BlockVersion;
    /**
     * @default {
     *   "format": "webp",
     *   "size": {
     *       "width": 600
     *   },
     *   "sources": [{
     *       "media": 1279,
     *	     "width": 360,
     *       "format": "webp",
     *       "alignment": "center"
     *   }]
     * }
     */
    image?: Picture;
  };
