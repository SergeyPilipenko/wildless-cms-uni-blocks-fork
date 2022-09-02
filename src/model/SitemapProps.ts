import type { LinkProps } from './LinkProps';
import type { Picture } from './Picture';

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
  icon?: Picture;
}

export interface SitemapProps {
  /** @title Дополнительное меню */
  topItems?: TopMenuItem[];
  /** @title Дополнительное меню */
  dispositions?: DispositionItem[];
}
