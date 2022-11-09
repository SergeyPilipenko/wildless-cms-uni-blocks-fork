import type { BlocksRegistry } from '../../model/BlocksRegistry';
import type { BlockDef } from '../../model/ContentPageDef';
import { isBlockInRegistry } from './isBlockInRegistry';
import { normalizeBlock } from './normalizeBlock';

export const filterBlocks = (blocks: BlockDef[], blocksRegistry: BlocksRegistry) =>
  blocks
    ?.filter(
      (block) =>
        isBlockInRegistry(block?.type || block?.mobile?.type, blocksRegistry) &&
        !block.mobile?.hidden,
    )
    .map(normalizeBlock);
