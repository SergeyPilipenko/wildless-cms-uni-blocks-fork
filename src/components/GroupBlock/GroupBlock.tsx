import { JSX } from '@redneckz/uni-jsx';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import type { UniBlockProps } from '../../types';
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
      <BlockWrapper context={context} className={`box-border gap-1 ${className}`} {...rest}>
        {tabsNewMap?.length ? (
          <GroupBlockTabs
            currentTag={currentTag}
            onTabClick={setCurrentTag}
            tabs={tabsNewMap}
            isShowCounter={isShowCounter}
          />
        ) : null}
        {groupBlocks.length ? (
          <GroupBlocksItem context={context} groupBlocks={filteredBlocks} />
        ) : null}
      </BlockWrapper>
    );
  },
);
