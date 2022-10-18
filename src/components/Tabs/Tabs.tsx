import { JSX } from '@redneckz/uni-jsx';
import { useEffect, useState } from '@redneckz/uni-jsx/lib/hooks';
import { EventBus } from '../../EventBus/EventBus';
import type { UniBlockProps } from '../../types';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { renderTab } from './renderTab';
import type { Tab, TabsContent } from './TabsContent';

export interface TabActivationEvent {
  type?: Tab['type'];
  label?: string;
}

export interface TabsBlockProps extends TabsContent, UniBlockProps {}

export const Tabs = JSX<TabsBlockProps>((props) => {
  const { context, className, tabs, page, showCounter } = props;

  const [currentTab, setCurrentTab] = useState(tabs ? tabs[0] : undefined);

  useEffect(() => {
    if (currentTab?.type === 'group') {
      return EventBus.inst.subject('tab', { label: currentTab.ref });
    }

    return undefined;
  }, [currentTab]);

  const handleClick = (selectedTab: Tab) => {
    if (selectedTab?.type === 'group') {
      EventBus.inst.fire('tab', { type: selectedTab.type, label: selectedTab.ref });
      setCurrentTab(selectedTab);
    }
  };

  return (
    <BlockWrapper
      context={context}
      className={`mb-2 box-border flex gap-x-1 ${className}`}
      role="tablist"
    >
      {tabs?.map(renderTab({ onClick: handleClick, currentTab, page, showCounter, context }))}
    </BlockWrapper>
  );
});
