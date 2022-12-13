import { getOrigin } from './url';

export const adjustHref = (
  href: string | undefined,
  router: { pathname: string; href?: string },
) => {
  if (!href) {
    return href;
  }

  const origin = getOrigin(router?.href);

  // Relative URL
  return origin ? href.replace(origin, '') || '/' : href;
};
