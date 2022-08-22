import type { BgColorVersion } from '../../model/BgColorVersion';
import type { LinkProps } from '../../model/LinkProps';
import type { SitemapProps } from '../../services/sitemap/SitemapProps';
import type { IconName } from '../../ui-kit/Icon/IconProps';

/**
 * @title Пункт подменю
 */
export interface SubMenuItem extends LinkProps {
  icon?: IconName;
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
  /** @title Подменю */
  burgerSubMenu?: SubMenuItem[]; // TODO: для мобильной версии
}
