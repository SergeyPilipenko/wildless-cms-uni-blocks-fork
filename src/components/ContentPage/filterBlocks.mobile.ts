import type { BlocksRegistry } from '../../model/BlocksRegistry';
import type { BlockDef } from '../../model/ContentPageDef';
import { normalizeBlock } from './normalizeBlock';

export const filterBlocks = (blocks: BlockDef[], blocksRegistry: BlocksRegistry) =>
  blocks
    ?.filter(
      (block) =>
        (block?.type || block?.mobile?.type || '') in blocksRegistry && !block.mobile?.hidden,
    )
    .map(normalizeBlock);
