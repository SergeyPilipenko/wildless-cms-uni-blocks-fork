import { setup } from '@redneckz/uni-jsx';
import { useEffect, useState } from 'react';
import runtime from 'react/jsx-runtime';
import { DaDataAPI } from '../api/DaDataAPI';
import type { ContentPageContext } from '../components/ContentPage/ContentPageContext';
import { IntersectionObserverTag } from './IntersectionObserverTag';

const { jsx, jsxs } = runtime as any;

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
setup(jsx, jsxs);

const TEST_ORIGIN = 'http://localhost:5001';

const DaData = DaDataAPI('https://10.80.4.9');

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
  useState,
  useRouter: Router,
  useAsyncData: (key, fetcher) => {
    const [data, setData] = useState<any>();
    useEffect(() => {
      fetcher(key).then((_) => {
        setData(_);
      });
    }, [key, fetcher]);

    return { data };
  },
  useGeolocation: (defaultLocation) => {
    const [city, setCity] = useState(
      globalThis.localStorage.getItem('location') || defaultLocation,
    );

    const getCity = () => {
      DaData.getFetcherAddress().then((_) => {
        const location = _ || defaultLocation;
        globalThis.localStorage.setItem('location', location);
        setCity(location);
      });
    };

    return [city, getCity];
  },
  useLikeService: () => ({
    likeCount: 0,
    like: () => {
      console.log('like');
    },
    dislike: () => {
      console.log('dislike');
    },
  }),
  handlerDecorator:
    (handler, targetContent): any =>
    (ev) => {
      ev.preventDefault();
      console.log(ev.target, ev, targetContent);
    },
  useSearch: () => {
    const [term, setTerm] = useState('');

    return {
      term,
      setTerm: (text: string) => setTerm(text),
    };
  },
  useEffect,
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
