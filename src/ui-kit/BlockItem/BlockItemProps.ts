/**
 * @title Версия списка
 * @enumNames ["Основной", "Второстепенный", "Белый"]
 */
export type BlockItemVersion = 'primary' | 'secondary' | 'gray';

/**
 * @title Содержимое элемента блока
 */
export interface BlockItemContent {
  /** @title Текст */
  text?: string;
}

/**
 * @title Параметры элемента блока
 */
export interface BlockItemProps extends BlockItemContent {
  className?: string;
  version?: BlockItemVersion;
  /** @title Маркер */
  isDotted?: boolean;
}
