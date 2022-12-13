import { isURL, withoutQuery } from '../../utils/url';

export const isHrefActive = (
  href: string | undefined,
  router: { pathname?: string; href?: string },
  cmp: (targetHref: string, baseHref: string) => boolean = (targetHref, baseHref) =>
    baseHref.startsWith(targetHref),
) => {
  return cmp(withoutQuery(href), withoutQuery(isURL(href) ? router.href : router.pathname));
};
