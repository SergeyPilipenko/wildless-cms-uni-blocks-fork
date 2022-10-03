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
 * @enumNames ["1919px и меньше", "1439px и меньше", "1279px и меньше"]
 */
export type MediaQuery = '(max-width: 1919px)' | '(max-width: 1439px)' | '(max-width: 1279px)';

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
