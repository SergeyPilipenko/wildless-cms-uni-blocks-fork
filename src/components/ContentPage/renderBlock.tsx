import type { SlotName } from '../../model/BlockDecorator';
import { BlockAncestors, BlockDecorator, DEFAULT_SLOT_NAME } from '../../model/BlockDecorator';
import type { BlocksRegistry } from '../../model/BlocksRegistry';
import type { BlockDef, ContentPageDef } from '../../model/ContentPageDef';
import type { VNode } from '../../model/VNode';
import { style2className } from '../../utils/style2className';
import type { ContentPageContext } from './ContentPageContext';

export interface RenderBlockOptions {
  key: string;
  page: ContentPageDef;
  blockDecorator: BlockDecorator;
  blocksRegistry: BlocksRegistry;
  context: ContentPageContext;
}

export interface RenderBlockProps {
  block: BlockDef;
  options: RenderBlockOptions;
  ancestors: BlockAncestors; // Recursion context
}

const defaultChildRenderer = (_: VNode) => _;

function renderBlock({ block, options, ancestors }: RenderBlockProps) {
  const { key, page, blockDecorator, blocksRegistry, context } = options;
  const { type, slots, blocks: childBlocks } = block;

  if (!(type && type in blocksRegistry)) {
    console.warn(`No block with "${type}" is registered`);
  }

  const BlockComponent = type && blocksRegistry[type];

  const blockRenderer = getBlockRenderer(options, ancestors, block);
  const children = childBlocks?.length ? childBlocks.map(blockRenderer()) : null;
  const blockSlots = slots ? renderSlots(slots, options, ancestors) : {};

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

export function getBlockRenderer(
  options: RenderBlockOptions,
  ancestors: BlockAncestors,
  parentBlock?: BlockDef,
) {
  const renderChild = parentBlock
    ? getBlockChildRenderer(parentBlock, options)
    : defaultChildRenderer;

  return (slotName: SlotName = DEFAULT_SLOT_NAME) =>
    (_: BlockDef, j: number) =>
      renderChild(
        renderBlock({
          block: _,
          options: { ...options, key: `${options.key ? options.key : _.type}-${j}` },
          ancestors: parentBlock ? [...ancestors, [slotName, parentBlock]] : [],
        }),
        j,
      );
}

export function renderSlots(
  slots: Record<string, BlockDef[]>,
  options: RenderBlockOptions,
  ancestors: BlockAncestors = [],
): Record<string, VNode> {
  const blockRenderer = getBlockRenderer(options, ancestors);

  return Object.entries(slots).reduce(
    (res, [slotKey, slotBlocks]) => ({
      ...res,
      [slotKey]: slotBlocks?.length ? slotBlocks.map(blockRenderer(slotKey)) : null,
    }),
    {},
  );
}

function getBlockChildRenderer(block: BlockDef, options: RenderBlockOptions) {
  const { blocksRegistry } = options;
  const { type } = block;
  const BlockComponent = type && blocksRegistry[type];
  const { renderChild = defaultChildRenderer } = BlockComponent || {};

  return renderChild;
}
