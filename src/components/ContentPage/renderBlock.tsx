import { BlockAncestors, BlockDecorator, DEFAULT_ANCESTORS } from '../../model/BlockDecorator';
import type { BlocksRegistry } from '../../model/BlocksRegistry';
import type { BlockDef, ContentPageDef } from '../../model/ContentPageDef';
import { style2className } from '../../utils/style2className';
import type { ContentPageContext } from './ContentPageContext';

interface RenderBlockOptions {
  key: string;
  page: ContentPageDef;
  blockDecorator: BlockDecorator;
  blocksRegistry: BlocksRegistry;
  context: ContentPageContext;
}

export function renderBlock(
  block: BlockDef,
  options: RenderBlockOptions,
  ancestors: BlockAncestors = DEFAULT_ANCESTORS, // Recursion context
) {
  const { key, page, blockDecorator, blocksRegistry, context } = options;
  const { type } = block;

  if (!(type && type in blocksRegistry)) {
    console.warn(`No block with "${type}" is registered`);
  }

  const BlockComponent = type && blocksRegistry[type];

  return blockDecorator(
    {
      blockClassName: `scroll-mt-12 ${style2className(block.style)}`, // TODO scroll-mt-12 ? here?
      block,
      ancestors,
      // Adjusted by decorator block and blockClassName
      render: ({ block: adjustedBlock, blockClassName: adjustedBlockClassName }) => {
        const { version, content, anchor, labels, blocks: childBlocks } = adjustedBlock;

        const children = childBlocks
          ? childBlocks.map((_, j) =>
              renderBlock(_, { ...options, key: `${options.key}-${j}` }, [...ancestors, block]),
            )
          : null;

        return BlockComponent ? (
          <BlockComponent
            key={key}
            className={adjustedBlockClassName}
            version={version}
            context={context}
            page={page}
            anchor={anchor}
            labels={labels}
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
