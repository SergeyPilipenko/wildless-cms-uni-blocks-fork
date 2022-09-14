import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { GroupBlockContent, GroupBlockTab } from './GroupBlockContent';
import { GroupBlockTabs } from './GroupBlockTabs';
import { GroupBlocksItem } from './GroupBlocksItem';
import { filterBlocksByTag } from './filterBlocksByTag';

export interface TabsItemProps extends GroupBlockTab {
  count?: number;
}

export interface GroupBlockProps extends GroupBlockContent, UniBlockProps {
  tabs?: TabsItemProps[];
}

export const GroupBlock = JSX<GroupBlockProps>(
  ({ className = '', tabs, context, anchor = null, groupBlocks = [] }) => {
    const [currentTag, setCurrentTag] = context.useState(tabs?.[0]?.tag);

    const filteredBlocks = filterBlocksByTag(groupBlocks, currentTag);

    const tabsNewMap = tabs?.map((tab) => {
      const count = tab.tag
        ? groupBlocks.filter((block) => block?.tags?.includes(`${tab.tag}`)).length
        : groupBlocks.length;

      return { ...tab, count };
    });

    return (
      <section id={anchor} className={`box-border gap-1 h-12 ${className}`}>
        {tabsNewMap?.length ? (
          <GroupBlockTabs currentTag={currentTag} onTabClick={setCurrentTag} tabs={tabsNewMap} />
        ) : null}
        {groupBlocks.length ? (
          <div className="list-none">
            <GroupBlocksItem context={context} groupBlocks={filteredBlocks} />
          </div>
        ) : null}
      </section>
    );
  },
);
