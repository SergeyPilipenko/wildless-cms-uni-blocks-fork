import type { LinkProps } from '../../model/LinkProps';
import { IconName } from '../../icons/IconName';

/**
 * @title Ссылка
 * @required ["text", "href"]
 */
export interface TopMenuItem extends LinkProps {
  /** @hidden */
  items?: LinkProps[];
}

/**
 * @title Ссылка дополнительного меню
 * @required ["text", "href"]
 */
export interface DispositionItem extends LinkProps {
  /** @hidden */
  icon?: IconName;
}

export interface SitemapProps {
  /** @title Основное меню */
  topItems?: TopMenuItem[];
  /** @title Дополнительное меню */
  dispositions?: DispositionItem[];
}
