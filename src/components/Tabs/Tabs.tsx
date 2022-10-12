import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import { EventBus } from '../../EventBus/EventBus';
import type { UniBlockProps } from '../../types';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { renderTab } from './renderTab';
import type { Tab, TabsContent } from './TabsContent';

export interface TabActivationEvent {
  label?: string;
}

export interface TabsProps extends TabsContent, UniBlockProps {}

export const Tabs = JSX<TabsProps>((props) => {
  const { context, className, tabs, page, showCounter } = props;

  const [currentTab, setCurrentTab] = useState(tabs ? tabs[0] : undefined);

  context.useEffect(() => EventBus.inst.subject('tab', { label: currentTab?.id }), [currentTab]);

  const handleClick = (selectedTab: Tab) => {
    EventBus.inst.fire('tab', { label: selectedTab.id });
    setCurrentTab(selectedTab);
  };

  return (
    <BlockWrapper
      context={context}
      className={`mb-2 box-border flex gap-x-1 ${className}`}
      role="tablist"
    >
      {tabs?.map(renderTab({ onClick: handleClick, currentTab, page, showCounter }))}
    </BlockWrapper>
  );
});
