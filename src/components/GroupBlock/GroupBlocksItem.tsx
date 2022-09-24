import { JSX } from '@redneckz/uni-jsx';
import type { JSXBlock } from '../../components/ContentPage/ContentPage';
import type { ContentPageContext } from '../../components/ContentPage/ContentPageContext';
import type { UniBlockProps } from '../../types';
import { style2className } from '../../utils/style2className';
import type { GroupBlockDef } from './BlocksTypeProps';
import { EmbeddableGroupBlocks } from './EmbeddableGroupBlocks';
import { GroupBlockContent } from './GroupBlockContent';

export interface GroupBlocksProps extends GroupBlockContent, UniBlockProps {}

export const GroupBlocksItem = JSX<GroupBlocksProps>(({ groupBlocks, context }) => {
  return (
    <div className="grid grid-cols-12 gap-2 box-border">
      {groupBlocks?.length ? groupBlocks.map(renderBlock(context)) : null}
    </div>
  );
});

export const renderBlock = (context: ContentPageContext) => (block: GroupBlockDef, i: number) => {
  const type = block?.blockType;
  if (!type || !(type in EmbeddableGroupBlocks)) {
    return null;
  }
  const classNameBlock = style2className(block?.style);
  const EmbeddedBlock: JSXBlock = EmbeddableGroupBlocks[type];

  return (
    <EmbeddedBlock key={`block_${i}`} context={context} {...block} className={classNameBlock} />
  );
};
