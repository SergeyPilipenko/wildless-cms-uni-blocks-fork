import type { BaseTileIconButton } from '../BaseTile/BaseTileProps';

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
export interface MobileAppTileContent {
  /** @title Заголовок */
  title?: string;
  description?: string;
  /**
   * @title Кнопки
   * @maxItems 4
   */
  buttons?: BaseTileIconButton[];
  // TODO: description для мобильной версии
  qr?: QRCode;
  /** @title Ссылка */
  href?: string; // TODO: для мобильной версии
}
