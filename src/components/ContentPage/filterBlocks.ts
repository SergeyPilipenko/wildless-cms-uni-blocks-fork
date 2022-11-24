import type { BlocksRegistry } from '../../model/BlocksRegistry';
import type { BlockDef } from '../../model/ContentPageDef';
import { normalizeBlock } from './normalizeBlock';

export const filterBlocks = (blocks: BlockDef[], blocksRegistry: BlocksRegistry) =>
  blocks
    ?.filter((block) => (block?.type || '') in blocksRegistry)
    .map((block) => ({
      ...normalizeBlock(block),
      slots:
        block.slots &&
        Object.keys(block.slots).reduce(
          (res, key) => ({
            ...res,
            [key]: [...filterBlocks(block.slots ? block.slots[key] : [], blocksRegistry)],
          }),
          {},
        ),
    }));
