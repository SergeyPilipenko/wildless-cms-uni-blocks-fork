import type { BlockVersion } from '../../model/BlockVersion';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import type { DescriptionContent } from '../../ui-kit/Description/DescriptionContent';
import type { HeadingContent } from '../../ui-kit/Heading/HeadingContent';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { ListContent } from '../../ui-kit/List/ListContent';

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
export type MobileAppTileContent = HeadingContent &
  DescriptionContent &
  ButtonContent &
  ListContent &
  ImageContent & {
    // TODO: description для мобильной версии
    qr?: QRCode;
    /** @title Ссылка */
    href?: string; // TODO: для мобильной версии
    version?: BlockVersion;
  };
