import type { BgColorVersion } from '../../model/BgColorVersion';
import type { LinkProps } from '../../model/LinkProps';
import type { IconProps, Picture } from '../../model/Picture';

/**
 * @title Пункт подменю
 */
export type SubMenuItem = LinkProps & IconProps;

/**
 * @title Ссылка дополнительного меню
 * @required ["text", "href"]
 */
export interface DispositionItem extends LinkProps {
  /** @hidden */
  icon?: Picture;
}

/**
 * @title Логотип
 */
export interface Logo {
  /** @title Иконка логотипа */
  image?: Picture;
  /** @title Текст логотипа */
  title?: string;
}

/**
 * @title Шапка (для мобильных горизонтальная прокрутка shift+mouseScroll)
 * @required ["defaultLocation", "topItems"]
 */
export interface HeaderContent {
  logo?: Logo;
  /**
   * @title Город по-умолчанию
   * @default Москва
   */
  defaultLocation?: string;
  /** @hidden */
  showSubMenu?: boolean;
  /** @hidden */
  bgColor?: BgColorVersion;
}
