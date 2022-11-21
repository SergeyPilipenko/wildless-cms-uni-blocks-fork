import { BlockAncestors, BlockDecorator, DEFAULT_ANCESTORS } from '../../model/BlockDecorator';
import type { BlocksRegistry } from '../../model/BlocksRegistry';
import type { BlockDef, ContentPageDef } from '../../model/ContentPageDef';
import type { VNode } from '../../model/VNode';
import { style2className } from '../../utils/style2className';
import type { ContentPageContext } from './ContentPageContext';

interface RenderBlockOptions {
  key: string;
  page: ContentPageDef;
  blockDecorator: BlockDecorator;
  blocksRegistry: BlocksRegistry;
  context: ContentPageContext;
}

const defaultChildRenderer = (_: VNode) => _;

export function renderBlock(
  block: BlockDef,
  options: RenderBlockOptions,
  ancestors: BlockAncestors = DEFAULT_ANCESTORS, // Recursion context
) {
  const { key, page, blockDecorator, blocksRegistry, context } = options;
  const { type, blocks: childBlocks } = block;

  if (!(type && type in blocksRegistry)) {
    console.warn(`No block with "${type}" is registered`);
  }

  const BlockComponent = type && blocksRegistry[type];

  const { renderChild = defaultChildRenderer } = BlockComponent || {};
  const renderChildBlock = (_: BlockDef, j: number) =>
    renderChild(
      renderBlock(_, { ...options, key: `${options.key}-${j}` }, [...ancestors, block]),
      j,
    );
  const children = childBlocks?.length ? childBlocks.map(renderChildBlock) : null;

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
