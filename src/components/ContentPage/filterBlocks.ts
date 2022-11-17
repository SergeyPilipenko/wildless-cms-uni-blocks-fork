import type { BlocksRegistry } from '../../model/BlocksRegistry';
import type { BlockDef } from '../../model/ContentPageDef';
import { normalizeBlock } from './normalizeBlock';

export const filterBlocks = (blocks: BlockDef[], blocksRegistry: BlocksRegistry) =>
  blocks?.filter((block) => (block?.type || '') in blocksRegistry).map(normalizeBlock);
