import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { LinkProps } from '../../model/LinkProps';
import type { UniBlockProps } from '../../types';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { getHash } from '../../utils/url';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';
import { NavigatorTabItem } from './NavigatorTabItem';
import type { NavigatorTabsContent } from './NavigatorTabsContent';

export interface TabsBlockProps extends UniBlockProps, NavigatorTabsContent {}

export const NavigatorTabs = JSX<TabsBlockProps>(
  ({ className = '', navigatorTabs, context, ...rest }) => {
    return (
      <BlockWrapper
        context={context}
        className={`sticky top-0 z-20 box-border flex gap-x-1 h-14 ${className}`}
        {...rest}
      >
        {navigatorTabs ? navigatorTabs.map(renderTab(context)) : null}
      </BlockWrapper>
    );
  },
);

const renderTab = (context: ContentPageContext) => (tab: LinkProps, i: number) => {
  const { handlerDecorator, useRouter } = context;

  const router = useRouter();
  const hash = getHash(router.href);
  const active = hash ? tab.href === hash : i === 0;

  return (
    <NavigatorTabItem
      key={tab.text}
      active={active}
      {...useLink({ router, handlerDecorator }, tab)}
    />
  );
};
