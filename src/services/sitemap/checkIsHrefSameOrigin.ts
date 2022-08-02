import { getOrigin } from '../../utils/url';

export const checkIsHrefSameOrigin = (
  href: string | undefined,
  router: { pathname?: string; href?: string },
) => getOrigin(href) === getOrigin(router.href);
