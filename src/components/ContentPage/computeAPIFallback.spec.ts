import type { Fallback, FallbackMap } from '../../model/Fallback';
import { Blocks } from '../Blocks';
import { computeAPIFallback, getPageFallbackMap, loadBlockFallback } from './computeAPIFallback';

describe('computeAPIFallback', () => {
  it('should return fallback data', async () => {
    const fallbackData: Fallback = {
      key: 'data',
    };

    const blockFallback = await computeAPIFallback(Blocks)();

    expect(blockFallback).toEqual(fallbackData);
  });
});

describe('loadBlockFallback', () => {
  it('should load block fallback', async () => {
    const headerBlockFallback: FallbackMap = {
      key: expect.any(Function),
    };

    const blockName = 'Header';
    const blockFallback = await loadBlockFallback(blockName);

    expect(blockFallback).toEqual(headerBlockFallback);
  });
});

describe('getPageFallbackMap', () => {
  it('should return unique fallbacks (for page) from blocks fallback map', async () => {
    const pageFallbackMap = {
      key: expect.any(Function),
      key2: expect.any(Function),
    };

    const blocksFallbackMap: Array<FallbackMap | undefined> = [
      undefined,
      { key: expect.any(Function) },
      { key2: expect.any(Function) },
      undefined,
      { key: expect.any(Function) },
    ];

    expect(getPageFallbackMap(blocksFallbackMap)).toEqual(pageFallbackMap);
  });

  it('should not return unique fallbacks (for page) from blocks fallback map', async () => {
    const pageFallbackMap = {
      key: expect.any(Function),
    };

    const blocksFallbackMap: Array<FallbackMap | undefined> = [
      undefined,
      { key: expect.any(Function) },
      { key2: expect.any(Function) },
      undefined,
      { key: expect.any(Function) },
    ];

    expect(getPageFallbackMap(blocksFallbackMap)).not.toEqual(pageFallbackMap);
  });
});
