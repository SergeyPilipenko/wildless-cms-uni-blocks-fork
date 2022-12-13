export interface Router {
  pathname: string;
  query: Record<string, string | string[] | undefined>;
  href?: string;
  basePath?: string;
  push: (url: string) => void;
  replace: (url: string) => void;
}

export type HandlerDecorator = <F extends Function>(handler: F, targetContent?: any) => F;

export interface ContentPageContext {
  useRouter: () => Router;
  handlerDecorator?: HandlerDecorator;
}
