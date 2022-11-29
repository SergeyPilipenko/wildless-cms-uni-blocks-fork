import type { SlotName } from '../../model/BlockDecorator';
import { BlockAncestors, DEFAULT_SLOT_NAME } from '../../model/BlockDecorator';
import type { BlockDef } from '../../model/ContentPageDef';
import type { VNode } from '../../model/VNode';
import { renderBlock, RenderBlockOptions } from './renderBlock';

interface RenderBlockListProps {
  blocks?: BlockDef[];
  options: RenderBlockOptions;
  ancestors?: BlockAncestors; // Recursion context
  parentBlock?: BlockDef;
  slotName?: SlotName;
}

const defaultChildRenderer = (_: VNode) => _;

export function renderBlocksList({
  blocks = [],
  ancestors = [],
  options,
  parentBlock,
  slotName = DEFAULT_SLOT_NAME,
}: RenderBlockListProps): Record<string, VNode> {
  const { blocksRegistry = {}, page = {} } = options;
  const { type } = parentBlock || {};
  const BlockComponent = type && blocksRegistry[type];
  const { renderChild = defaultChildRenderer } = BlockComponent || {};

  return blocks.map((_: BlockDef, j: number) =>
    renderChild(
      renderBlock({
        block: _,
        options: { ...options, key: `${options.key ? options.key : _.type}-${j}` },
        ancestors: parentBlock
          ? [...ancestors, [parentBlock, slotName]]
          : [[page, DEFAULT_SLOT_NAME]],
      }),
      j,
    ),
  );
}
