import type { DescriptionProps } from '../../model/HeadlineType';
import type { LinkProps } from '../../model/LinkProps';
import type { IconProps } from '../../model/Picture';

/**
 * @title Тип контакта
 * @enumNames [
 *    "Телефон",
 *    "Почта"
 *  ]
 */
export type ContactType = 'tel' | 'email';

/**
 * @title Контакт
 */
export type ContactInfo = DescriptionProps & {
  /** @title Текст */
  text?: string;
  type?: ContactType;
};

/**
 * @title Пункт подменю
 */
export type SubMenuItem = LinkProps & IconProps;

/**
 * @title Подвал
 * @hidden
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type FooterContent = {};
