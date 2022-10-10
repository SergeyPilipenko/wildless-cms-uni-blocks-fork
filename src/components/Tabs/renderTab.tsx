import type { ContentPageDef } from '../../types';
import type { Tab } from './TabsContent';

interface RenderTabProps {
  onClick: OnTabClick;
  currentTab?: Tab;
  page?: ContentPageDef;
  showCounter?: boolean;
}

type OnTabClick = (tab: Tab) => void;

const badgeStyle = 'min-w-[22px] w-[22px] h-[22px] rounded-full text-xs-light ml-2';

export const renderTab =
  ({ onClick, currentTab, showCounter, page }: RenderTabProps) =>
  (tab: Tab, i: number) => {
    const isActive = currentTab === tab;

    const tabBg = isActive ? 'bg-primary-main' : 'group bg-white';
    const tabText = `text-m-light ${
      isActive ? 'text-white' : 'text-secondary-text group-hover:text-primary-main'
    }`;
    const counterBlockStyle = `${badgeStyle}
      ${
        isActive
          ? 'bg-white/30 text-white'
          : 'bg-main-divider text-secondary-text group-hover:text-primary-main'
      }`;

    const count = tab.id
      ? page?.blocks?.filter((block) => block?.labels?.includes(tab.id as string)).length
      : page?.blocks?.length;

    return (
      <div
        key={String(i)}
        className={`flex h-12 w-full flex-1 cursor-pointer mr-2 last:mr-0 box-content ${tabBg}`}
        role="tab"
        aria-selected={isActive}
        onClick={() => onClick(tab)}
      >
        <div className="flex flex-1 items-center justify-center">
          {tab?.title ? <h3 className={tabText}>{tab?.title}</h3> : null}
          {showCounter ? (
            <div className={`flex items-center justify-center ${counterBlockStyle}`}>{count}</div>
          ) : null}
        </div>
      </div>
    );
  };
