import type { ContentPageDef, Slot } from '../../types';
import { BlocksRegistry } from './ContentPage';
import { filterBlocks } from './filterBlocks';

export const normalizePage =
  (blocksRegistry: BlocksRegistry) => (contentPage: ContentPageDef | undefined | null) => {
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
