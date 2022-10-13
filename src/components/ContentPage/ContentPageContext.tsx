import { VNode } from '../../model/VNode';

export interface Router {
  pathname: string;
  query: Record<string, string | string[] | undefined>;
  href?: string;
  basePath?: string;
  push: (url: string) => void;
  replace: (url: string) => void;
}

export type HandlerDecorator = <F extends Function>(handler: F, targetContent?: any) => F;

export interface Search {
  term: string;
  setTerm: (t: string) => void;
}

export interface IntersectionObserverTagProps {
  tag: keyof HTMLElementTagNameMap;
  className?: string;
  anchor?: string;
  children?: VNode;
  observerCallback: IntersectionObserverCallback;
  observerOptions?: IntersectionObserverInit;
}

export type IntersectionObserverComponent = (props: IntersectionObserverTagProps) => VNode;

export interface ContentPageContext {
  useRouter: () => Router;
  handlerDecorator?: HandlerDecorator;
  IntersectionObserverTag: IntersectionObserverComponent;
}
