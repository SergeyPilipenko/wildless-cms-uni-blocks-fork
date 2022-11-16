import type { DescriptionProps } from '../../model/HeadlineType';
import type { LinkCommonProps, LinkProps } from '../../model/LinkProps';
import type { IconProps } from '../../model/Picture';
import type { SitemapProps } from '../../services/sitemap/SitemapProps';

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
  socialMedia?: LinkCommonProps[];
  /** @title Мобильные приложения */
  mobileApps?: LinkCommonProps[];
  /** @title Заголовок для меню */
  horizontalNavigationTitle?: string; // TODO: для мобильной версии
  /** @title Подменю */
  subMenu?: SubMenuItem[]; // TODO: для мобильной версии
}
