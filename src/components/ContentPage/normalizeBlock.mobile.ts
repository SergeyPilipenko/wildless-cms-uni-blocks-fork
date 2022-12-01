import type { BlocksRegistry } from '../../model/BlocksRegistry';
import type { BlockDef, Slot } from '../../model/ContentPageDef';
import { mapSlot } from './mapSlot';

export function normalizeBlock<S extends Slot>(block?: S, blocksRegistry?: BlocksRegistry): S {
  const { mobile, ...rest } = (block || {}) as BlockDef;

  const normalizedBlock = mobile
    ? { ...rest, ...mobile, content: { ...rest.content, ...mobile.content } }
    : block;

  return {
    ...mapSlot((blocks) => filterBlocks(blocks, blocksRegistry))(normalizedBlock || {}),
  } as S;
}

const filterBlocks = (blocks?: BlockDef[], blocksRegistry?: BlocksRegistry) =>
  blocks
    ? blocks
        ?.filter(
          (block) =>
            blocksRegistry &&
            (block?.type || block?.mobile?.type || '') in blocksRegistry &&
            !block.mobile?.hidden,
        )
        .map((block) => ({
          ...normalizeBlock(block, blocksRegistry),
        }))
    : [];
