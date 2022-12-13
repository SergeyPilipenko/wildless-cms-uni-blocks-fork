import { BlockAncestors } from '../../model/BlockDecorator';
import type { BlockDef, Slot } from '../../model/ContentPageDef';
import type { VNode } from '../../model/VNode';
import type { RenderBlockOptions } from './renderBlock';
import { renderBlocksList } from './renderBlockList';

interface RenderSlotsProps {
  slots?: Record<string, BlockDef[]>;
  parent: Slot;
  options: RenderBlockOptions;
  ancestors?: BlockAncestors;
}

export const renderSlots = ({
  slots,
  parent,
  options,
  ancestors = [],
}: RenderSlotsProps): Record<string, VNode[]> =>
  Object.entries(slots || {}).reduce(
    (res, [slotName, slotBlocks]) => ({
      ...res,
      [slotName]: renderBlocksList({
        blocks: slotBlocks,
        parent,
        slotName,
        options,
        ancestors,
      }),
    }),
    {},
  );
