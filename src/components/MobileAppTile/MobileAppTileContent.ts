import type { BlockVersion } from '../../model/BlockVersion';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { ListContent } from '../../ui-kit/List/ListContent';
import type { HeadlineCommonProps } from '../../model/HeadlineType';
import type { HeadingCommonProps } from '../../ui-kit/Heading/HeadingProps';
import type { Picture } from '../../model/Picture';

/**
 * @title Мобильное приложение
 */
export type MobileAppTileContent = HeadlineCommonProps &
  HeadingCommonProps &
  ButtonContent &
  ListContent &
  ImageContent & {
    // TODO: description для мобильной версии
    /** @title QR-код */
    qr?: Picture;
    /** @title Ссылка */
    href?: string; // TODO: для мобильной версии
    version?: BlockVersion;
  };
