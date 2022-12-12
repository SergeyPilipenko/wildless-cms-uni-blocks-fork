import type { BlocksRegistry } from '../../model/BlocksRegistry';
import type { ContentPageDef } from '../../model/ContentPageDef';
import { normalizeBlock } from './normalizeBlock';

export const normalizePage =
  (blocksRegistry: BlocksRegistry) =>
  (contentPage: ContentPageDef | undefined | null): ContentPageDef =>
    contentPage ? normalizeBlock(contentPage, blocksRegistry) : {};
