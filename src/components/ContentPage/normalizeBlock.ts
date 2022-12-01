import type { BlocksRegistry } from '../../model/BlocksRegistry';
import type { BlockDef, Slot } from '../../model/ContentPageDef';
import { mapSlot } from './mapSlot';

export function normalizeBlock<S extends Slot>(block?: S, blocksRegistry?: BlocksRegistry): S {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { mobile, ...rest } = (block || {}) as BlockDef;

  return {
    ...mapSlot((blocks) => filterBlocks(blocks, blocksRegistry))({ ...rest }),
  } as S;
}

const filterBlocks = (blocks?: BlockDef[], blocksRegistry?: BlocksRegistry) =>
  blocks
    ? blocks
        .filter((block) => blocksRegistry && (block?.type || '') in blocksRegistry)
        .map((block) => ({
          ...normalizeBlock(block, blocksRegistry),
        }))
    : [];
