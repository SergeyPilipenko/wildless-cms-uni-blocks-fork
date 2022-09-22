import { VNode } from '../../model/VNode';
import type { FuncReturnVoid } from '../../types';

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
) => [State, FuncReturnVoid<SetStateAction<State>>];

export interface IntersectionObserverTagProps {
  Tag: string;
  children?: VNode;
  observerCallback: IntersectionObserverCallback;
  observerOptions?: IntersectionObserverInit;
}

export interface ContentPageContext {
  useRouter: () => Router;
  useState: SetStateHook;
  useAsyncData: AsyncDataHook;
  useGeolocation: GeolocationHook;
  useLikeService: () => LikeService;
  useSearch: () => Search;
  handlerDecorator?: HandlerDecorator;
  IntersectionObserverTag: (props: IntersectionObserverTagProps & Record<string, any>) => VNode;
}
