import type { LinkProps } from '../../model/LinkProps';
import type { Picture } from '../../model/Picture';

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
  icon?: Picture;
}

export interface SitemapDataProps {
  /** @title Основное меню */
  topItems?: TopMenuItem[];
  /** @title Дополнительное меню */
  dispositions?: DispositionItem[];
}
