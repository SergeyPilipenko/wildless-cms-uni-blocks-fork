import { RenderTabProps } from './renderTab';
import {
  ACTIVE_LINK_CLASSES,
  ACTIVE_TEXT_CLASSES,
  INACTIVE_LINK_CLASSES,
  INACTIVE_TEXT_CLASSES,
  LINK_CLASSES,
  TEXT_CLASSES,
} from './tabItemClasses';
import { Tab } from './TabsContent';

const BADGE_CLASSES = 'min-w-[22px] w-[22px] h-[22px] rounded-full text-xs ml-2';
const ACTIVE_BADGE_CLASSES = 'bg-white/30 text-white';
const INACTIVE_BADGE_CLASSES = 'bg-main-divider text-secondary-text group-hover:text-primary-main';

export const renderGroupTab =
  ({ onClick, currentTab, showCounter, page }: RenderTabProps) =>
  (tab: Tab, i: number) => {
    const active = currentTab === tab;

    const count = tab.ref
      ? page?.blocks?.filter((block) => block?.labels?.includes(tab.ref as string)).length
      : page?.blocks?.length;

    return (
      <div
        key={String(i)}
        className={`${LINK_CLASSES} ${active ? ACTIVE_LINK_CLASSES : INACTIVE_LINK_CLASSES}`}
        role="tab"
        aria-selected={active}
        onClick={() => onClick(tab)}
      >
        <div className="flex flex-1 items-center justify-center">
          {tab?.title ? renderTitle(tab.title, active) : null}
          {showCounter && count ? renderCount(count, active) : null}
        </div>
      </div>
    );
  };

const renderTitle = (title: string, active: boolean) => (
  <h3 className={`${TEXT_CLASSES} ${active ? ACTIVE_TEXT_CLASSES : INACTIVE_TEXT_CLASSES}`}>
    {title}
  </h3>
);

const renderCount = (count: number, active: boolean) => (
  <div className={`${BADGE_CLASSES} ${active ? ACTIVE_BADGE_CLASSES : INACTIVE_BADGE_CLASSES}`}>
    {count}
  </div>
);
