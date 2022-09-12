import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import { LinkProps } from '../../model/LinkProps';
import type { UniBlockProps } from '../../types';
import { getHash } from '../../utils/url';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';
import { NavigatorTabItem } from './NavigatorTabItem';
import type { NavigatorTabsContent } from './NavigatorTabsContent';

export interface TabsBlockProps extends UniBlockProps, NavigatorTabsContent {}

export const NavigatorTabs = JSX<TabsBlockProps>(
  ({ className = '', navigatorTabs, context, anchor = null }) => {
    const href = globalThis.location?.href; // TODO: remove globalThis, use href from router

    return (
      <section
        className={`sticky top-0 z-20 box-border flex gap-x-1 h-14 ${className}`}
        id={anchor}
      >
        {navigatorTabs ? navigatorTabs.map(renderTab(context, href)) : null}
      </section>
    );
  },
);

const renderTab = (context: ContentPageContext, href?: string) => (tab: LinkProps, i: number) => {
  const { useRouter, handlerDecorator } = context;
  const router = useRouter();

  const hash = getHash(href);
  const active = hash ? tab.href === hash : i === 0;

  return (
    <NavigatorTabItem
      key={tab.href}
      active={active}
      {...useLink({ router, handlerDecorator }, tab)}
    />
  );
};
