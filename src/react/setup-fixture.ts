import '@redneckz/uni-jsx/lib/setup.react';
import { useState } from 'react';
import { handlerDecorator } from '../hooks/handlerDecorator';
import { useRouter } from '../hooks/useRouter';
import { projectSettings } from '../ProjectSettings';
import wlc from '../wlc.json';

projectSettings.setup(wlc);

useRouter.setup(() => {
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
});

handlerDecorator.setup((handler, targetContent): any => (ev) => {
  ev.preventDefault();
  console.log(ev.target, ev, targetContent);
  handler(ev);
});
