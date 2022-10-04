import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { filterBlocksByTag } from './filterBlocksByTag';
import type { GroupBlockContent, GroupBlockTab } from './GroupBlockContent';
import { GroupBlocksItem } from './GroupBlocksItem';
import { GroupBlockTabs } from './GroupBlockTabs';

export interface TabsItemProps extends GroupBlockTab {
  count?: number;
}

export interface GroupBlockProps extends GroupBlockContent, UniBlockProps {
  tabs?: TabsItemProps[];
}

export const GroupBlock = JSX<GroupBlockProps>(
  ({ className = '', tabs, context, groupBlocks = [], isShowCounter, ...rest }) => {
    const [currentTag, setCurrentTag] = context.useState(tabs?.[0]?.tag);

    const filteredBlocks = filterBlocksByTag(groupBlocks, currentTag);

    const tabsNewMap = tabs?.map((tab) => {
      const count = tab.tag
        ? groupBlocks.filter((block) => block?.tags?.includes(tab.tag as string)).length
        : groupBlocks.length;

      return { ...tab, count };
    });

    return (
      <BlockWrapper context={context} className={`box-border ${className}`} {...rest}>
        {tabsNewMap?.length ? (
          <GroupBlockTabs
            currentTag={currentTag}
            onTabClick={setCurrentTag}
            tabs={tabsNewMap}
            isShowCounter={isShowCounter}
          />
        ) : null}
        {groupBlocks.length ? (
          <div className="mt-1">
            <GroupBlocksItem context={context} groupBlocks={filteredBlocks} />
          </div>
        ) : null}
      </BlockWrapper>
    );
  },
);
