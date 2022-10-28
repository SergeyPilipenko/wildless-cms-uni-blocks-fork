import type { Picture } from '../../model/Picture';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';

/**
 * @title Изображение
 */
export type ErrorImageDef = {
  /** @default Image */
  errorContentType: 'Image';
  /**
   * @default {
   *   "format": "webp",
   *   "size": {
   *       "width": 460
   *   },
   *   "sources": [{
   *       "media": 1279,
   *       "width": 276,
   *       "format": "webp",
   *       "alignment": "center"
   *   }]
   * }
   */
  image?: Picture;
};

/**
 * @title Код ошибки
 */
export type ErrorCodeDef = {
  /** @default Code */
  errorContentType: 'Code';
  /** @default 404 */
  code?: ErrorType;
};

/** @title Вид контента */
export type ErrorContentDef = ErrorCodeDef | ErrorImageDef;

/** @title Код */
export type ErrorType =
  | ''
  | '400'
  | '401'
  | '402'
  | '403'
  | '404'
  | '500'
  | '501'
  | '502'
  | '503'
  | '504'
  | '505';

/**
 * @title Блок ошибки
 */
export interface ErrorBlockContent {
  /** @title Заголовок */
  title?: string;
  /** @title Описание */
  subtitle?: string;
  error?: ErrorContentDef;
  /** @title Кнопка */
  button?: ButtonProps;
}
