import type { IconName } from '../icons/IconName';
import type { IconVersion } from './IconVersion';
import { ImageSize } from './ImageSize';

export type ImgFormats = 'jpeg' | 'jpg' | 'png' | 'gif' | 'webp' | 'heif' | 'avif';

/**
 * @title Позиционирование
 * @enumNames [
 *    "Сверху слева",
 *    "Сверху по центру",
 *    "Сверху справа",
 *    "Посередине слева",
 *    "Посередине по центру",
 *    "Посередине справа",
 *    "Снизу слева",
 *    "Снизу по центру",
 *    "Снизу справа"
 *  ]
 * @default "center"
 */
export type ImgAlignment =
  | 'northwest'
  | 'north'
  | 'northeast'
  | 'west'
  | 'center'
  | 'east'
  | 'southwest'
  | 'south'
  | 'southeast';

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
  alignment?: ImgAlignment;
  /** @title Иконка */
  icon?: IconName;
  /** @title Версия иконки */
  iconVersion?: IconVersion;
  /** @title Картинка */
  src?: string;
  /** @title Формат */
  format?: ImgFormats;
  /** @hidden */
  options?: Record<string, any>;
  media?: MediaQuery;
  /** @title Размер изображения */
  size?: Partial<ImageSize>;
}

/** @title Изображение */
export interface Picture extends Img, ImgSource {
  /** @title Другие форматы */
  sources?: ImgSource[];
  className?: string;
}

export type IconProps = {
  /** @title Иконка */
  icon?: Picture;
};
