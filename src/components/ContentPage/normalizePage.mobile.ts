import type { BlockDef, ContentPageDef, Slot } from '../../types';
import { BlocksRegistry } from './ContentPage';
import { isBlockInRegistry } from './isBlockInRegistry';
import { normalizeBlock } from './normalizeBlock';

export function normalizePage(
  contentPage: ContentPageDef | undefined | null,
  blocksRegistry: BlocksRegistry,
): ContentPageDef | undefined {
  if (!contentPage) {
    return undefined;
  }

  const { blocks = [], slots } = contentPage;

  return {
    ...contentPage,
    blocks: getMobileBlocks(blocks, blocksRegistry),
    slots:
      slots &&
      Object.keys(slots).reduce(
        (res, key) => ({
          ...res,
          [key]: {
            ...slots[key],
            blocks: getMobileBlocks((slots[key] as Slot).blocks || [], blocksRegistry),
          },
        }),
        {},
      ),
  };
}

function getMobileBlocks(blocks: BlockDef[], blocksRegistry: BlocksRegistry) {
  return blocks
    ?.filter(
      (block) =>
        isBlockInRegistry(block?.type || block?.mobile?.type, blocksRegistry) &&
        !block.mobile?.hidden,
    )
    .map(normalizeBlock);
}
