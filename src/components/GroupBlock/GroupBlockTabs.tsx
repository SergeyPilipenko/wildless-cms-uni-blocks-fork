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
    <div className={`mb-2 box-border flex gap-x-1 ${className}`} role="tablist">
      {tabs?.map(renderTab({ currentTag, isShowCounter, onTabClick }))}
    </div>
  );
});

const badgeStyle = 'min-w-[22px] w-[22px] h-[22px] rounded-full text-m-sm';

const renderTab =
  ({ currentTag, isShowCounter, onTabClick }: GroupBlockTabsProps) =>
  (tab: TabsItemProps, i: number) => {
    const isActive = currentTag === tab.tag;
    const tabBg = isActive ? 'bg-primary-main' : 'group bg-white';
    const tabText = isActive ? 'text-white' : 'text-secondary-text group-hover:text-primary-main';
    const counterBlockStyle = `${badgeStyle}
      ${isActive ? 'bg-white/30 text-white' : 'bg-secondary-light text-secondary-text'}`;

    return (
      <div
        key={String(i)}
        className={`flex w-full h-12 flex-1 cursor-pointer mr-2 last:mr-0 box-content ${tabBg}`}
        role="tab"
        onClick={() => onTabClick(tab.tag)}
        aria-selected={isActive}
      >
        <div className="flex flex-1 items-center justify-center">
          {tab?.title ? <h3 className={tabText}>{tab?.title}</h3> : null}
          {isShowCounter ? (
            <div
              className={`flex items-center justify-center ml-8 text-s-bold ${counterBlockStyle}`}
            >
              <span>{tab.count}</span>
            </div>
          ) : null}
        </div>
      </div>
    );
  };
