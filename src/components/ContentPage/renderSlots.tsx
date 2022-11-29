import { BlockAncestors } from '../../model/BlockDecorator';
import type { BlockDef } from '../../model/ContentPageDef';
import type { VNode } from '../../model/VNode';
import type { RenderBlockOptions } from './renderBlock';
import { renderBlocksList } from './renderBlockList';

interface RenderSlotsProps {
  slots?: Record<string, BlockDef[]>;
  options: RenderBlockOptions;
  ancestors?: BlockAncestors;
}

export function renderSlots({
  slots = {},
  options,
  ancestors = [],
}: RenderSlotsProps): Record<string, VNode> {
  return Object.entries(slots).reduce(
    (res, [slotKey, slotBlocks]) => ({
      ...res,
      [slotKey]: renderBlocksList({
        blocks: slotBlocks,
        slotName: slotKey,
        options,
        ancestors,
      }),
    }),
    {},
  );
}
