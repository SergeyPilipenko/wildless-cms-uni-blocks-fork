import { JSX } from '@redneckz/uni-jsx';
import { Img } from '../Img/Img';
import type { Tab, TabClickHandler, TabsProps } from './TabsProps';

const TAB_STYLE = 'px-2 h-14 pb-2 pt-3 border border-b-0 border-main-stroke';
const ACTIVE_TAB_STYLE = 'px-2 h-16 pt-4 pb-2 text-white bg-primary-main';

export const Tabs = JSX<TabsProps>(({ tabs, currentTabIndex, onTabClick }) => {
  return (
    <div className="flex items-end border-b border-main-stroke" role="tablist">
      {tabs?.map(renderTab(currentTabIndex, onTabClick))}
    </div>
  );
});

const renderTab =
  (currentTabIndex: number, onTabClick: TabClickHandler) => (tab: Tab, index: number) => {
    const isActive = currentTabIndex === index;
    return (
      <div
        key={String(index)}
        className={`flex h-full flex-1 cursor-pointer mr-2 last:mr-0 box-content ${
          isActive ? ACTIVE_TAB_STYLE : TAB_STYLE
        }`}
        role="tab"
        onClick={() => onTabClick(index)}
        aria-selected={String(isActive)}
      >
        {tab?.icon ? renderIcon(tab, isActive) : null}
        <div>
          {tab?.title ? <h3 className="font-medium m-0 text-base">{tab?.title}</h3> : null}
          {tab?.description ? (
            <span className={`font-light text-xs ${isActive ? '' : 'text-secondary-text'}`}>
              {tab?.description}
            </span>
          ) : null}
        </div>
      </div>
    );
  };

const renderIcon = (tab: Tab, isActive: boolean) => (
  <div className="h-full mt-1" style={isActive ? { filter: 'invert(1)' } : null}>
    <Img className="w-5 h-5 mr-3" image={tab?.icon || 'CardIcon'} asSVG={!isActive} />
  </div>
);
