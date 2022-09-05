import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { getHash, isURL } from '../../utils/url';
import type { Router } from '../ContentPage/ContentPageContext';
import { NavigatorTabItem } from './NavigatorTabItem';
import type { NavigatorTab, NavigatorTabsContent } from './NavigatorTabsContent';

export interface TabsBlockProps extends UniBlockProps, NavigatorTabsContent {}

export const NavigatorTabs = JSX<TabsBlockProps>(
  ({ className = '', navigatorTabs, context, anchor = null }) => {
    const router = context.useRouter();
    const href = globalThis.location.href;

    return (
      <section
        className={`sticky top-0 z-20 box-border flex gap-x-1 h-12 ${className}`}
        id={anchor}
      >
        {navigatorTabs ? navigatorTabs.map(renderTab(href, router)) : null}
      </section>
    );
  },
);

const renderTab = (href?: string, router?: Router) => (tab: NavigatorTab, i: number) => {
  const hash = getHash(href);
  const active = hash ? tab.href === hash : i === 0;

  return (
    <NavigatorTabItem
      key={tab.href}
      active={active}
      onClick={() => handleRoute(router, tab.href)}
      {...tab}
    />
  );
};

const handleRoute = (router?: Router, href?: string) => {
  if (isURL(href)) return; // if href if full URL - move to HTML href action, do not touch router

  router?.replace(href || '');
};
