import { BlockAncestors, BlockDecorator } from '../../model/BlockDecorator';
import type { BlocksRegistry } from '../../model/BlocksRegistry';
import type { BlockDef, ContentPageDef } from '../../model/ContentPageDef';
import { style2className } from '../../utils/style2className';
import { renderBlocksList } from './renderBlockList';
import { renderSlots } from './renderSlots';

export interface RenderBlockOptions {
  key: string;
  page: ContentPageDef;
  blockDecorator: BlockDecorator;
  blocksRegistry: BlocksRegistry;
}

export interface RenderBlockProps {
  block?: BlockDef;
  options: RenderBlockOptions;
  ancestors?: BlockAncestors; // Recursion context
}

export function renderBlock({ block = {}, options, ancestors = [] }: RenderBlockProps) {
  const { key, page, blockDecorator, blocksRegistry = {} } = options;
  const { type, slots, blocks: childBlocks } = block;

  if (!(type && type in blocksRegistry)) {
    console.warn(`No block with "${type}" is registered`);
  }

  const BlockComponent = type && blocksRegistry[type];

  const subBlockRenderProps = { parent: block, options, ancestors };
  const children = renderBlocksList({ ...subBlockRenderProps, blocks: childBlocks });
  const blockSlots = slots ? renderSlots({ ...subBlockRenderProps, slots }) : {};

  return blockDecorator(
    {
      blockClassName: `scroll-mt-12 ${style2className(block.style)}`, // TODO scroll-mt-12 ? here?
      block,
      ancestors,
      // Adjusted by decorator block and blockClassName
      render: ({ block: adjustedBlock, blockClassName: adjustedBlockClassName }) => {
        const { content } = adjustedBlock;

        return BlockComponent ? (
          <BlockComponent
            key={key}
            page={page}
            block={adjustedBlock}
            className={adjustedBlockClassName}
            ancestors={ancestors}
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
