import { VNode } from '../../model/VNode';
import { EventBus } from '../../react/EventBus/EventBus';

export interface Router {
  pathname: string;
  query: Record<string, string | string[] | undefined>;
  href?: string;
  basePath?: string;
  push: (url: string) => void;
  replace: (url: string) => void;
}

export interface LikeService {
  likeCount: number;
  like: () => void;
  dislike: () => void;
}

export type HandlerDecorator = <F extends Function>(handler: F, targetContent: any) => F;

export interface Search {
  term: string;
  setTerm: (t: string) => void;
}

export type AsyncDataHook = <Data, Err = any>(
  key: string,
  fetcher: (fetcherKey: string) => Promise<Data>,
) => { data?: Data; error?: Err };

export type GeolocationHook = (defaultLocation: string) => [string, () => void];

export type SetStateAction<S> = S | ((prevState: S) => S);

export type SetStateHook = <State>(
  initialState: State | (() => State),
) => [State, (action: SetStateAction<State>) => void];

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
  useState: SetStateHook;
  useAsyncData: AsyncDataHook;
  useGeolocation: GeolocationHook;
  useLikeService: () => LikeService;
  useSearch: () => Search;
  handlerDecorator?: HandlerDecorator;
  IntersectionObserverTag: IntersectionObserverComponent;
  eventBus: EventBus;
}
