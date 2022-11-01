import type { Picture } from '../../model/Picture';
import type { HeadlineCommonProps } from '../../model/HeadlineType';

/**
 * @title Цвет блока
 * @enumNames ["Основная", "Второстепенная", "Второстепенная прозрачная"]
 */
export type TextBlockVersion = 'primary' | 'secondary' | 'secondary-light';

/**
 * @title Размер иконки
 * @enumNames ["Нет", "Маленькая", "Большая"]
 */
export type TextBlockIconVersion = 'none' | 'small' | 'big';

/**
 * @title Текстовый блок
 */
export type TextBlockContent = HeadlineCommonProps & {
  iconVersion?: TextBlockIconVersion;
  image?: Picture;
  blockVersion?: TextBlockVersion;
  /** @title Буллиты */ // TODO: mobile prop
  isDotted?: boolean;
  /** @title Список (моб.) */ // TODO: mobile prop
  items?: string[];
};
