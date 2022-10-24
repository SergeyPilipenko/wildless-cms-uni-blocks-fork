import type { BlockDef, ContentPageDef, Slot } from '../../types';
import { BlocksRegistry } from './ContentPage';
import { isBlockInRegistry } from './isBlockInRegistry';
import { normalizeBlock } from './normalizeBlock';

export function normalizePage<T extends ContentPageDef | undefined | null>(
  contentPage: T,
  blocksRegistry: BlocksRegistry,
): ContentPageDef | undefined {
  if (!contentPage) {
    return undefined;
  }

  const { blocks = [], slots } = contentPage;

  return {
    ...contentPage,
    blocks: getDesktopBlocks(blocks, blocksRegistry),
    slots:
      slots &&
      Object.keys(slots).reduce(
        (res, key) => ({
          ...res,
          [key]: {
            ...slots[key],
            blocks: getDesktopBlocks((slots[key] as Slot).blocks || [], blocksRegistry),
          },
        }),
        {},
      ),
  };
}

function getDesktopBlocks(blocks: BlockDef[], blocksRegistry: BlocksRegistry) {
  return blocks
    ?.filter((block) => isBlockInRegistry(block?.type, blocksRegistry))
    .map(normalizeBlock);
}
