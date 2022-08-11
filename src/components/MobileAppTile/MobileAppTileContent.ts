import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import type { DescriptionContent } from '../../ui-kit/Description/DescriptionContent';
import type { HeadingContent } from '../../ui-kit/Heading/HeadingContent';

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
  ButtonContent & {
    // TODO: description для мобильной версии
    qr?: QRCode;
    /** @title Ссылка */
    href?: string; // TODO: для мобильной версии
  };
