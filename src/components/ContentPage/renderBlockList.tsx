import type { SlotName } from '../../model/BlockDecorator';
import { BlockAncestors, DEFAULT_SLOT_NAME } from '../../model/BlockDecorator';
import type { BlockDef, Slot } from '../../model/ContentPageDef';
import type { VNode } from '../../model/VNode';
import { renderBlock, RenderBlockOptions } from './renderBlock';

interface RenderBlockListProps {
  blocks?: BlockDef[];
  parent: Slot;
  slotName?: SlotName;
  options: RenderBlockOptions;
  ancestors?: BlockAncestors; // Recursion context
}

const defaultChildRenderer = (_: VNode) => _;

export function renderBlocksList({
  blocks = [],
  parent,
  slotName = DEFAULT_SLOT_NAME,
  options,
  ancestors = [],
}: RenderBlockListProps): Record<string, VNode> {
  const { blocksRegistry = {} } = options;
  const { type } = parent as BlockDef;
  const BlockComponent = type && blocksRegistry[type];
  const { renderChild = defaultChildRenderer } = BlockComponent || {};

  return blocks.map((_: BlockDef, j: number) =>
    renderChild(
      renderBlock({
        block: _,
        options: { ...options, key: `${options.key ? options.key : _.type}-${j}` },
        ancestors: [...ancestors, [parent, slotName]],
      }),
      j,
    ),
  );
}
