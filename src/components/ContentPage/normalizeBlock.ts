import { BlockDef } from '../../types';

export function normalizeBlock(block: BlockDef) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { mobile, ...rest } = block;

  return rest;
}
