import type { Picture } from '../../model/Picture';

export interface OfficeServicesBlockList {
  /**
   *  @title Иконка
   *  @default {
   *   "size": {
   *     "width": 24,
   *     "height": 24
   *   },
   *   "format": "webp"
   * }
   */
  icon?: Picture;
  /** @title Текст */
  label?: string;
}

/**
 * @title Офисные услуги
 */
export interface OfficeServicesBlockContent {
  /** @title Заголовок */
  title?: string;
  /** @title Список услуг */
  servicesList?: OfficeServicesBlockList[];
}
