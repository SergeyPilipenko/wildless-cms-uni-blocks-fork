import type { Picture } from '../../model/Picture';

export interface OfficeServicesBlockList {
  /** @title Иконка */
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
