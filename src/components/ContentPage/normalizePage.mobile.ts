import type { BlockDef, ContentPageDef, Slot } from '../../types';
import { Blocks } from '../Blocks';
import { isBlockInRegistry } from './isBlockInRegistry';
import { normalizeBlock } from './normalizeBlock';

export function normalizePage(
  contentPage: ContentPageDef | undefined | null,
): ContentPageDef | undefined {
  if (!contentPage) {
    return;
  }

  const { blocks, slots } = contentPage;

  return {
    ...contentPage,
    blocks: getMobileBlocks(blocks),
    slots:
      slots &&
      Object.keys(slots).reduce(
        (res, key) => ({
          ...res,
          [key]: {
            ...slots[key],
            blocks: getMobileBlocks((slots[key] as Slot).blocks),
          },
        }),
        {},
      ),
  };
}

function getMobileBlocks(blocks?: BlockDef[]) {
  return blocks
    ?.filter(
      (block) =>
        isBlockInRegistry(block?.type || block?.mobile?.type, Blocks) && !block.mobile?.hidden,
    )
    .map(normalizeBlock);
}
