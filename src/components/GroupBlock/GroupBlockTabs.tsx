import { JSX } from '@redneckz/uni-jsx';
import type { TabsItemProps } from './GroupBlock';

export type TabClickHandler = (tag) => void;

export interface GroupBlockTabsProps {
  onTabClick: TabClickHandler;
  currentTag?: string;
  className?: string;
  tabs?: TabsItemProps[];
  isShowCounter?: boolean;
}

export const GroupBlockTabs = JSX<GroupBlockTabsProps>((props) => {
  const { tabs, currentTag, onTabClick, className = '', isShowCounter = true } = props;

  return (
    <div className={`mb-2 box-border flex gap-x-1 ${className}`} role="tablist">
      {tabs?.map(renderTab(onTabClick, isShowCounter, currentTag))}
    </div>
  );
});

const badgeStyle = 'min-w-[22px] w-[22px] h-[22px] rounded-full text-m-sm';

const renderTab =
  (onTabClick: TabClickHandler, isShowCounter: boolean, currentTag?: string) =>
  (tab: TabsItemProps, i: number) => {
    const isActive = currentTag === tab.tag;
    const tabBg = isActive ? 'bg-primary-main' : 'group bg-white';
    const tabText = isActive ? 'text-white' : 'text-secondary-text group-hover:text-primary-main';
    const counterBlockStyle = `${badgeStyle} 
      ${isActive ? 'bg-white/30 text-white' : 'bg-secondary-light text-secondary-text'}`;

    return (
      <div
        key={String(i)}
        className={`flex h-full w-full h-12 flex-1 cursor-pointer mr-2 last:mr-0 box-content ${tabBg}`}
        role="tab"
        onClick={() => onTabClick(tab.tag)}
        aria-selected={String(isActive)}
        tag={tab?.tag}
      >
        <div className="flex flex-1 items-center justify-center">
          {tab?.title ? <h3 className={`mr-8 ${tabText}`}>{tab?.title}</h3> : null}
          {isShowCounter ? (
            <div className={`flex items-center justify-center ${counterBlockStyle}`}>
              <span>{tab.count}</span>
            </div>
          ) : null}
        </div>
      </div>
    );
  };
