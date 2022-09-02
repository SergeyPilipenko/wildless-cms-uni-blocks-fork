import type { BgColorVersion } from '../../model/BgColorVersion';
import type { LinkProps } from '../../model/LinkProps';
import type { SitemapProps } from '../../services/sitemap/SitemapProps';
import type { Picture } from '../../model/Picture';

/**
 * @title Пункт подменю
 */
export interface SubMenuItem extends LinkProps {
  icon?: Picture;
}

/**
 * @title Ссылка дополнительного меню
 * @required ["text", "href"]
 */
export interface DispositionItem extends LinkProps {
  /** @hidden */
  icon?: Picture;
}

/**
 * @title Шапка (для мобильных горизонтальная прокрутка shift+mouseScroll)
 * @required ["defaultLocation", "topItems"]
 */
export interface HeaderContent extends SitemapProps {
  /**
   * @title Город по-умолчанию
   * @default Москва
   */
  defaultLocation?: string;
  /**
   * @title Фон элемента
   * @hidden
   * @default white
   */
  bgColor?: BgColorVersion;
}
