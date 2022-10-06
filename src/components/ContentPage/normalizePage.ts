import type { BlockDef, ContentPageDef, Slot } from '../../types';
import { Blocks } from '../Blocks';
import { isBlockInRegistry } from './isBlockInRegistry';
import { normalizeBlock } from './normalizeBlock';

export function normalizePage<T extends ContentPageDef | undefined | null>(
  contentPage: T,
): ContentPageDef | undefined {
  if (!contentPage) {
    return;
  }

  const { blocks, slots } = contentPage;

  return {
    ...contentPage,
    blocks: getDesktopBlocks(blocks),
    slots:
      slots &&
      Object.keys(slots).reduce(
        (res, key) => ({
          ...res,
          [key]: {
            ...slots[key],
            blocks: getDesktopBlocks((slots[key] as Slot).blocks),
          },
        }),
        {},
      ),
  };
}

function getDesktopBlocks(blocks?: BlockDef[]) {
  return blocks?.filter((block) => isBlockInRegistry(block?.type, Blocks)).map(normalizeBlock);
}
