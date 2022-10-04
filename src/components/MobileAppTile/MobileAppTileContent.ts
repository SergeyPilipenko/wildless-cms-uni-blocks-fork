import type { BlockVersion } from '../../model/BlockVersion';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { ListContent } from '../../ui-kit/List/ListContent';
import type { HeadlineCommonProps } from '../../model/HeadlineType';

/**
 * @title QR код
 */
export interface QRCode {
  /** @title QR код */
  src?: string;
  /** @title Ссылка */
  href?: string;
}

/**
 * @title Мобильное приложение
 */
export type MobileAppTileContent = HeadlineCommonProps &
  ButtonContent &
  ListContent &
  ImageContent & {
    // TODO: description для мобильной версии
    qr?: QRCode;
    /** @title Ссылка */
    href?: string; // TODO: для мобильной версии
    version?: BlockVersion;
  };
