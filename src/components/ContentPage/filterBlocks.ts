import { BlockDef } from '../../types';
import { BlocksRegistry } from './ContentPage';
import { isBlockInRegistry } from './isBlockInRegistry';
import { normalizeBlock } from './normalizeBlock';

export const filterBlocks = (blocks: BlockDef[], blocksRegistry: BlocksRegistry) =>
  blocks?.filter((block) => isBlockInRegistry(block?.type, blocksRegistry)).map(normalizeBlock);
