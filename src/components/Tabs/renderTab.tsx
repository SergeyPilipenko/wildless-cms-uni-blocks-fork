import { useLink } from '../../hooks/useLink';
import type { ContentPageDef } from '../../types';
import { isURL } from '../../utils/url';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';
import { renderGroupTab } from './renderGroupTab';
import { renderLinkTab } from './renderLinkTab';
import type { Tab } from './TabsContent';

export interface RenderTabProps {
  onClick: (tab: Tab) => void;
  currentTab?: Tab;
  page?: ContentPageDef;
  showCounter?: boolean;
  context: ContentPageContext;
}

export const renderTab =
  ({ onClick, currentTab, showCounter, page, context }: RenderTabProps) =>
  (tab: Tab, i: number) => {
    const { useRouter, handlerDecorator } = context;
    const router = useRouter();

    if (isURL(tab?.ref)) {
      return renderLinkTab({
        ...useLink({ router, handlerDecorator }, { href: tab.ref, text: tab.title }),
        i,
      });
    }

    return renderGroupTab({ onClick, currentTab, showCounter, page, context })(tab, i);
  };
