import { BlocksRegistry } from '../../model/BlocksRegistry';
import { BlockDef } from '../../model/ContentPageDef';
import { filterBlocks } from './filterBlocks';
import { mapSlot } from './mapSlot';

export function normalizeBlock(block?: BlockDef, blocksRegistry?: BlocksRegistry) {
  const { mobile, ...rest } = block || {};

  const normalizedBlock = mobile
    ? { ...rest, ...mobile, content: { ...rest.content, ...mobile.content } }
    : block;

  return {
    ...mapSlot((blocks) => filterBlocks(blocks, blocksRegistry))(normalizedBlock || {}),
  };
}
