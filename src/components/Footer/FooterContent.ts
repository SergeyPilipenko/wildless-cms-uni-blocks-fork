import type { LinkProps } from '../../model/LinkProps';
import type { SitemapProps } from '../../services/sitemap/SitemapProps';
import type { IconName } from '../../icons/IconName';

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
export interface ContactInfo {
  /** @title Текст */
  text?: string;
  type?: ContactType;
  /** @title Описание */
  description?: string;
}

/**
 * @required ["href"]
 */
export type SocialMedia = Omit<LinkProps, 'text'>;

/**
 * @title Пункт подменю
 */
export interface SubMenuItem extends LinkProps {
  /** @title Иконка подменю */
  icon?: IconName;
}

/**
 * @title Подвал
 * @required ["topItems"]
 */
export interface FooterContent extends SitemapProps {
  /** @title Обязательные документы */
  documents?: LinkProps[];
  /** @title Другие предприятия */
  relatedEnterprises?: LinkProps[];
  /** @title Контакты */
  contacts?: ContactInfo[];
  /** @title Социальные сети */
  socialMedia?: SocialMedia[];
  /** @title Заголовок для меню */
  horizontalNavigationTitle?: string; // TODO: для мобильной версии
  /** @title Подменю */
  subMenu?: SubMenuItem[]; // TODO: для мобильной версии
}
