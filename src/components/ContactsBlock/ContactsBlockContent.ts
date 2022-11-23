import type { HeadlineCommonProps } from '../../model/HeadlineType';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';

/**
 * @title Контакты
 */
export interface ContactsBlockContent {
  /**
   * @title Данные
   * @maxItems 2
   * */
  info?: InfoItemProps[];
  /**
   * @title Контакты
   * @maxItems 2
   * */
  contacts?: ContactItemProps[][];
  contactsBlockVersion?: 'secondary';
}

/**
 * @title Элемент плитки
 */
export interface ContactItemProps {
  /** @title Дополнительное описание */
  additionalDescription?: string;
  /** @title Описание */
  description?: string;
  /** @title Заголовок */
  title?: string;
}

/**
 * @title Элемент плитки
 */
export interface InfoItemProps extends HeadlineCommonProps {
  /** @title Кнопка */
  button?: ButtonProps;
}
