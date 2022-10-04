import { JSX } from '@redneckz/uni-jsx';
import type { TabsItemProps } from './GroupBlock';

export interface GroupBlockTabsProps {
  className?: string;
  currentTag?: string;
  tabs?: TabsItemProps[];
  isShowCounter?: boolean;
  onTabClick: (tag?: string) => void;
}

export const GroupBlockTabs = JSX<GroupBlockTabsProps>((props) => {
  const { className = '', tabs, currentTag, isShowCounter = false, onTabClick } = props;

  return (
    <div className={`box-border flex gap-x-1 h-14 ${className}`} role="tablist">
      {tabs?.map(renderTab({ currentTag, isShowCounter, onTabClick }))}
    </div>
  );
});

const badgeStyle = 'min-w-[22px] w-[22px] h-[22px] rounded-full text-xs ml-2';

const renderTab =
  ({ currentTag, isShowCounter, onTabClick }: GroupBlockTabsProps) =>
  (tab: TabsItemProps, i: number) => {
    const isActive = currentTag === tab.tag;

    const tabBg = isActive ? 'bg-primary-main' : 'group bg-white';

    const tabText = `text-m ${
      isActive ? 'text-white' : 'text-secondary-text group-hover:text-primary-main'
    }`;
    const counterBlockStyle = `${badgeStyle}
      ${
        isActive
          ? 'bg-white/30 text-white'
          : 'bg-main-divider text-secondary-text group-hover:text-primary-main'
      }`;

    return (
      <div
        key={String(i)}
        className={`flex-1 flex items-center justify-center cursor-pointer ${tabBg}`}
        role="tab"
        onClick={() => onTabClick(tab.tag)}
        aria-selected={isActive}
      >
        {tab?.title ? <div className={tabText}>{tab.title}</div> : null}
        {isShowCounter ? (
          <div className={`flex items-center justify-center ${counterBlockStyle}`}>{tab.count}</div>
        ) : null}
      </div>
    );
  };
