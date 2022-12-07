import type { LinkProps } from '../../model/LinkProps';
import {
  ACTIVE_LINK_CLASSES,
  ACTIVE_TEXT_CLASSES,
  INACTIVE_LINK_CLASSES,
  INACTIVE_TEXT_CLASSES,
  LINK_CLASSES,
  TEXT_CLASSES,
} from './tabItemClasses';
import type { Tab } from './TabsContent';

export interface RenderLinkTabProps extends LinkProps {
  onClick?: () => void;
  i: number;
  currentTab?: Tab;
}

export const renderLinkTab = ({
  text,
  currentTab,
  onClick,
  href,
  target = '_self',
  i,
}: RenderLinkTabProps) => {
  const active = currentTab?.type === 'link' && currentTab.href === href;

  return (
    <a
      role="tab"
      key={String(i)}
      className={`${LINK_CLASSES} ${active ? ACTIVE_LINK_CLASSES : INACTIVE_LINK_CLASSES}`}
      target={target}
      href={href}
      onClick={onClick}
    >
      <span className={`${TEXT_CLASSES} ${active ? ACTIVE_TEXT_CLASSES : INACTIVE_TEXT_CLASSES}`}>
        {text}
      </span>
    </a>
  );
};
