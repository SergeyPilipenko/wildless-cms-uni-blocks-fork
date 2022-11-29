import { BlockAncestors, BlockDecorator } from '../../model/BlockDecorator';
import type { BlocksRegistry } from '../../model/BlocksRegistry';
import type { BlockDef, ContentPageDef } from '../../model/ContentPageDef';
import { style2className } from '../../utils/style2className';
import type { ContentPageContext } from './ContentPageContext';
import { renderBlocksList } from './renderBlockList';
import { renderSlots } from './renderSlots';

export interface RenderBlockOptions {
  key: string;
  page: ContentPageDef;
  blockDecorator: BlockDecorator;
  blocksRegistry: BlocksRegistry;
  context: ContentPageContext;
}

export interface RenderBlockProps {
  block?: BlockDef;
  options: RenderBlockOptions;
  ancestors?: BlockAncestors; // Recursion context
}

export function renderBlock({ block = {}, options, ancestors = [] }: RenderBlockProps) {
  const { key, page, blockDecorator, blocksRegistry = {}, context } = options;
  const { type, slots, blocks: childBlocks } = block;

  if (!(type && type in blocksRegistry)) {
    console.warn(`No block with "${type}" is registered`);
  }

  const BlockComponent = type && blocksRegistry[type];
  const children = renderBlocksList({
    blocks: childBlocks,
    parentBlock: block,
    options,
    ancestors,
  });
  const blockSlots = slots ? renderSlots({ slots, options, ancestors }) : {};

  return blockDecorator(
    {
      blockClassName: `scroll-mt-12 ${style2className(block.style)}`, // TODO scroll-mt-12 ? here?
      block,
      ancestors,
      // Adjusted by decorator block and blockClassName
      render: ({ block: adjustedBlock, blockClassName: adjustedBlockClassName }) => {
        const { version, anchor, labels, content } = adjustedBlock;

        return BlockComponent ? (
          <BlockComponent
            key={key}
            className={adjustedBlockClassName}
            context={context}
            page={page}
            ancestors={ancestors}
            version={version}
            anchor={anchor}
            labels={labels}
            slots={blockSlots}
            {...content}
          >
            {children}
          </BlockComponent>
        ) : null;
      },
    },
    key,
  );
}
