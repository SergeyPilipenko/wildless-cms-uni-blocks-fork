import type { Fallback, FallbackMap } from '../../types/Fallback';
import type { BlocksRegistry } from './ContentPage';

interface FallbackData {
  key: string;
  data: unknown;
}

export const computeAPIFallback =
  (blocksRegistry: BlocksRegistry) => async (): Promise<Fallback> => {
    const blocksFallbackMap = await Promise.all(Object.keys(blocksRegistry).map(loadBlockFallback));
    const pageFallbackMap = getPageFallbackMap(blocksFallbackMap);
    const fallbackData = await Promise.allSettled(
      Object.entries(pageFallbackMap).map(async ([key, fetcher]) => {
        const data = await fetcher();

        return { key, data };
      }),
    );

    return fallbackData
      .filter((d): d is PromiseFulfilledResult<FallbackData> => d.status === 'fulfilled')
      .reduce((res, item) => {
        return {
          ...res,
          [item.value.key]: item.value.data,
        };
      }, {});
  };

export async function loadBlockFallback(blockName: string): Promise<FallbackMap | undefined> {
  try {
    const blockFallback = await import(`../${blockName}/${blockName}.fallback`);

    return blockFallback && blockFallback['fallback']
      ? await blockFallback['fallback']()
      : undefined;
  } catch (error) {
    return undefined;
  }
}

export function getPageFallbackMap(blocksFallbackMap: Array<FallbackMap | undefined>): FallbackMap {
  return blocksFallbackMap
    .filter((m): m is FallbackMap => Boolean(m))
    .reduce((result, fallbackMap) => {
      for (const [key, fetcher] of Object.entries(fallbackMap)) {
        if (!result[key]) {
          result[key] = fetcher;
        }
      }

      return result;
    }, {});
}
