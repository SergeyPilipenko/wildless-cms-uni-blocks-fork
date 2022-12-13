export interface Router {
  pathname: string;
  query: Record<string, string | string[] | undefined>;
  href?: string;
  basePath?: string;
  push: (url: string) => void;
  replace: (url: string) => void;
}

export function useRouter(): Router {
  return useRouter._impl();
}

useRouter._impl = (): Router => ({
  href: globalThis.location?.href || '/',
  pathname: globalThis.location?.pathname || '/',
  query: {},
  push: () => {
    // Do nothing
  },
  replace: () => {
    // Do nothing
  },
});

useRouter.setup = (impl: () => Router) => {
  useRouter._impl = impl;
};
