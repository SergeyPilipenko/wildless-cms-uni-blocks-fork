import { BlockDef } from '../../model/ContentPageDef';

export function normalizeBlock(block: BlockDef) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { mobile, ...rest } = block;

  return rest;
}
