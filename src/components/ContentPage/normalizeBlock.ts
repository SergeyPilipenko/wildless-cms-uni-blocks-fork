import { BlocksRegistry } from '../../model/BlocksRegistry';
import { BlockDef } from '../../model/ContentPageDef';
import { filterBlocks } from './filterBlocks';
import { mapSlot } from './mapSlot';

export function normalizeBlock(block?: BlockDef, blocksRegistry?: BlocksRegistry) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { mobile, ...rest } = block || {};

  return {
    ...mapSlot((blocks) => filterBlocks(blocks, blocksRegistry))({ ...rest }),
  };
}
