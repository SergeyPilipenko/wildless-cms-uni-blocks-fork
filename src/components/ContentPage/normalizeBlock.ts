import type { BlocksRegistry } from '../../model/BlocksRegistry';
import type { BlockDef, Slot } from '../../model/ContentPageDef';
import { mapSlot } from './mapSlot';

export function normalizeBlock<S extends Slot>(block?: S, blocksRegistry?: BlocksRegistry): S {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { mobile, ...result } = (block || {}) as BlockDef;

  return mapSlot(filterBlocks(blocksRegistry))({ ...result }) as S;
}

const filterBlocks =
  (blocksRegistry?: BlocksRegistry) =>
  (blocks?: BlockDef[]): BlockDef[] =>
    blocks
      ? blocks
          .filter((block) => blocksRegistry && (block?.type || '') in blocksRegistry)
          .map((block) => normalizeBlock(block, blocksRegistry))
      : [];
