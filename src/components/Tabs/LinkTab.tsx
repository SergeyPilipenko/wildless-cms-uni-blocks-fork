import { JSX } from '@redneckz/uni-jsx';
import { useCallback } from '@redneckz/uni-jsx/lib/hooks';
import { EventBus } from '../../EventBus/EventBus';
import { useLink } from '../../hooks/useLink';
import {
  ACTIVE_LINK_CLASSES,
  ACTIVE_TEXT_CLASSES,
  INACTIVE_LINK_CLASSES,
  INACTIVE_TEXT_CLASSES,
  LINK_CLASSES,
  TEXT_CLASSES,
} from './tabItemClasses';
import type { LinkTabData, TabData } from './TabsContent';

interface LinkTabProps {
  tab: LinkTabData;
  currentTab?: TabData;
  onClick?: (tab: TabData) => void;
}

export const LinkTab = JSX<LinkTabProps>((props) => {
  const { tab, currentTab, onClick } = props;
  const active = currentTab?.type === 'link' && currentTab.href === tab.href;

  const handleClick = useCallback(() => {
    onClick && onClick(tab);
    EventBus.inst.fire('anchorClick', { isScrolling: true, label: tab.href });
  }, [tab, onClick]);

  const link = useLink();
  const adjustedProps = link({ ...tab, onClick: handleClick });

  return (
    <a
      role="tab"
      className={`${LINK_CLASSES} ${active ? ACTIVE_LINK_CLASSES : INACTIVE_LINK_CLASSES}`}
      target={tab.target}
      href={adjustedProps.href}
      onClick={adjustedProps.onClick}
    >
      <span className={`${TEXT_CLASSES} ${active ? ACTIVE_TEXT_CLASSES : INACTIVE_TEXT_CLASSES}`}>
        {tab.text}
      </span>
    </a>
  );
});
