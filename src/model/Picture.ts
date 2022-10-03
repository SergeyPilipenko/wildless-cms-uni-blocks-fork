import type { IconName } from '../icons/IconName';
import type { IconVersion } from './IconVersion';

export type ImgFormats = 'jpeg' | 'jpg' | 'png' | 'gif' | 'webp' | 'heif' | 'avif';

export interface Img {
  /** @title Картинка */
  src?: string;
  /** @title Альтернативный текст (alt) */
  alt?: string;
  /** @title Текст подсказки (title) */
  title?: string;
}

/**
 * @title Брейкпоинт
 * @enumNames ["Меньше 1920px", "Меньше 1440px", "Меньше 1280px"]
 */
export type MediaQuery = 1919 | 1439 | 1279;

export interface ImgSource {
  /** @title Иконка */
  icon?: IconName;
  iconVersion?: IconVersion;
  /** @title Картинка */
  src?: string;
  /** @title Формат */
  format?: ImgFormats;
  /** @hidden */
  options?: Record<string, any>;
  media?: MediaQuery;
  /** @title Размер изображения */
  size?: {
    /** @title Ширина */
    width?: number;
    /** @title Высота */
    height?: number;
  };
}

/** @title Изображение */
export interface Picture extends Img, ImgSource {
  /** @title Другие форматы */
  sources?: ImgSource[];
  className?: string;
}
