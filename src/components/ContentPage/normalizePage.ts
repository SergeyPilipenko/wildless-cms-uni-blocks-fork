import type { BlocksRegistry } from '../../model/BlocksRegistry';
import type { ContentPageDef, Slot } from '../../model/ContentPageDef';
import { filterBlocks } from './filterBlocks';

export const normalizePage =
  (blocksRegistry: BlocksRegistry) =>
  (contentPage: ContentPageDef | undefined | null): ContentPageDef | undefined => {
    if (!contentPage) {
      return undefined;
    }

    const { blocks = [], slots } = contentPage;

    return {
      ...contentPage,
      blocks: filterBlocks(blocks, blocksRegistry),
      slots:
        slots &&
        Object.keys(slots).reduce(
          (res, key) => ({
            ...res,
            [key]: {
              ...slots[key],
              blocks: filterBlocks((slots[key] as Slot).blocks || [], blocksRegistry),
            },
          }),
          {},
        ),
    };
  };
