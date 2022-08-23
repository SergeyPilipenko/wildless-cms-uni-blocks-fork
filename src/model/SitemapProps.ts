import type { LinkProps } from './LinkProps';
import { IconName } from '../icons/IconName';

/**
 * @title Меню
 * @required ["text", "href"]
 */
export interface TopMenuItem extends LinkProps {
  /** @title Ссылки */
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
  /** @title Дополнительное меню */
  topItems?: TopMenuItem[];
  /** @title Дополнительное меню */
  dispositions?: DispositionItem[];
}
