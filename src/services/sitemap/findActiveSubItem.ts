import type { Router } from '../../hooks/useRouter';
import type { LinkProps } from '../../model/LinkProps';
import { maxBy } from '../../utils/maxBy';
import { isSubItemActive } from './isSubItemActive';

export const findActiveSubItem =
  (router: Router) =>
  <T extends LinkProps>(items: T[] = []): T | undefined => {
    const possibleActiveSubItems = items?.filter(isSubItemActive(router));

    return possibleActiveSubItems?.length
      ? maxBy((_: T) => _.href?.length || 0)(possibleActiveSubItems) // More specific item with max length
      : undefined;
  };
