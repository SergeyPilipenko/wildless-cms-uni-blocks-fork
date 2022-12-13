import type { ContentPageDef } from '../../model/ContentPageDef';
import { assertUnreachable } from '../../utils/assertUnreachable';
import { LinkTab } from './LinkTab';
import { renderGroupTab } from './renderGroupTab';
import type { TabData } from './TabsContent';

export interface RenderTabProps {
  page?: ContentPageDef;
  currentTab?: TabData;
  showCounter?: boolean;
  onClick: (tab: TabData) => void;
}

export const renderTab =
  ({ page, currentTab, showCounter, onClick }: RenderTabProps) =>
  // Linter doesn't understand that switch processes all cases
  // eslint-disable-next-line consistent-return
  (tab: TabData, i: number) => {
    const type = tab.type;

    if (!(type === 'group' || type === 'link')) {
      return null;
    }

    switch (type) {
      case 'group':
        return renderGroupTab({ page, currentTab, showCounter, onClick })(tab, i);
      case 'link': {
        return <LinkTab key={String(i)} tab={tab} currentTab={currentTab} />;
      }
      default:
        assertUnreachable(type);
    }
  };
