import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { getHash } from '../../utils/url';
import type { Router } from '../ContentPage/ContentPageContext';
import { NavigatorTabItem } from './NavigatorTabItem';
import type { NavigatorTab, NavigatorTabsContent } from './NavigatorTabsContent';

export interface TabsBlockProps extends NavigatorTabsContent, UniBlockProps {}

export const NavigatorTabs = JSX<TabsBlockProps>(
  ({ className = '', navigatorTabs, context, anchor = null }) => {
    const router = context.useRouter();
    const hash = getHash(router.href);
    return (
      <section
        className={`sticky top-0 z-20 box-border flex gap-x-1 h-12 ${className}`}
        id={anchor}
      >
        {navigatorTabs ? navigatorTabs.map(renderTab(hash, router)) : null}
      </section>
    );
  },
);

const renderTab = (hash?: string, router?: Router) => (tab: NavigatorTab, i: number) => {
  const anchorHash = `#${tab.anchor}`;
  const active = hash ? anchorHash === hash : i === 0;
  return (
    <NavigatorTabItem
      key={tab.anchor}
      active={active}
      onClick={() => router?.replace(anchorHash)}
      {...tab}
    />
  );
};
