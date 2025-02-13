import type { Router } from '../../hooks/useRouter';
import type { LinkProps } from '../../model/LinkProps';
import { isHrefActive } from './isHrefActive';

export const isSubItemActive =
  (router: Router) =>
  (subItem: LinkProps): boolean =>
    isHrefActive(subItem.href, router);
