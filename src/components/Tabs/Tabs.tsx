import { JSX } from '@redneckz/uni-jsx';
import { useEffect, useState } from '@redneckz/uni-jsx/lib/hooks';
import { EventBus } from '../../EventBus/EventBus';
import type { UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { renderTab } from './renderTab';
import type { TabData, TabsContent } from './TabsContent';

export interface TabActivationEvent {
  type?: TabData['type'];
  label?: string;
}

export interface AnchorClickScrollingEvent {
  isScrolling?: boolean;
  label?: string;
}

export interface TabsBlockProps extends TabsContent, UniBlockProps {}

export const Tabs = JSX<TabsBlockProps>((props) => {
  const { className = '', tabs, showCounter, isSticky, ...rest } = props;

  const [currentTab, setCurrentTab] = useState(tabs ? tabs[0] : undefined);

  useEffect(
    () =>
      EventBus.inst.subscribe('tab', (event) => {
        if (!tabs) {
          return;
        }
        const tab = tabs.find(checkTab(event));
        if (event.type === 'link' && tab) {
          setCurrentTab(tab);
        }
      }),
    [tabs],
  );

  useEffect(() => {
    if (currentTab?.type === 'group') {
      return EventBus.inst.subject('tab', { label: currentTab.ref });
    }

    return undefined;
  }, [currentTab]);

  const handleClick = (selectedTab: TabData) => {
    if (selectedTab?.type === 'group') {
      EventBus.inst.fire('tab', { type: selectedTab.type, label: selectedTab.ref });
    }
    setCurrentTab(selectedTab);
  };

  return (
    <BlockWrapper
      className={`${isSticky ? 'sticky top-1 z-20 ' : ''}box-border flex gap-x-1 ${className}`}
      role="tablist"
      {...rest}
    >
      {tabs?.map(renderTab({ onClick: handleClick, currentTab, showCounter, ...rest }))}
    </BlockWrapper>
  );
});

const checkTab = (event: TabActivationEvent) => (_: TabData) =>
  _.type === 'link' && _.href === `#${event.label}`;
