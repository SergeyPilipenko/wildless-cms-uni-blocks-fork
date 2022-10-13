import '@redneckz/uni-jsx/lib/setup.react';
import { useState } from 'react';
import type { ContentPageContext } from '../components/ContentPage/ContentPageContext';
import { IntersectionObserverTag } from './IntersectionObserverTag';

const TEST_ORIGIN = 'http://localhost:5001';

const Router = () => {
  const [href, setHref] = useState<string>(globalThis.location.href);

  return {
    href: href,
    pathname: '/credits',
    query: {},
    push: (url: string) => {
      globalThis.history.pushState(null, '', url);
      setHref(globalThis.location.href);
    },
    replace: (url: string) => {
      globalThis.history.replaceState(null, '', url);
      setHref(globalThis.location.href);
    },
  };
};

export const context: ContentPageContext = {
  useRouter: Router,
  handlerDecorator:
    (handler, targetContent): any =>
    (ev) => {
      ev.preventDefault();
      console.log(ev.target, ev, targetContent);
    },
  IntersectionObserverTag,
};

export const mobileContext: ContentPageContext = {
  ...context,
  useRouter: () => ({
    href: `${TEST_ORIGIN}/mobile/credits`,
    pathname: '/mobile/credits',
    query: {},
    push: (url: string) => {
      console.log(url);
    },
    replace: (url: string) => {
      console.log(url);
    },
  }),
};
