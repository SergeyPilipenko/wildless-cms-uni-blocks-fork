import type { BlocksRegistry } from '../../model/BlocksRegistry';
import type { BlockDef, Slot } from '../../model/ContentPageDef';
import { mapSlot } from './mapSlot';

export function normalizeBlock<S extends Slot>(block?: S, blocksRegistry?: BlocksRegistry): S {
  const { mobile, ...rest } = (block || {}) as BlockDef;
  const result = mobile
    ? { ...rest, ...mobile, content: { ...rest.content, ...mobile.content } }
    : block;

  return mapSlot(filterBlocks(blocksRegistry))(result || {}) as S;
}

const filterBlocks =
  (blocksRegistry?: BlocksRegistry) =>
  (blocks?: BlockDef[]): BlockDef[] =>
    blocks
      ? blocks
          ?.filter(
            (block) =>
              blocksRegistry &&
              (block?.type || block?.mobile?.type || '') in blocksRegistry &&
              !block.mobile?.hidden,
          )
          .map((block) => normalizeBlock(block, blocksRegistry))
      : [];
