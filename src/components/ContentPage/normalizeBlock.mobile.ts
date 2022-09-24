import { BlockDef } from '../../types';

export function normalizeBlock(block: BlockDef) {
  const { mobile, ...rest } = block;

  return mobile ? { ...rest, ...mobile, content: { ...rest.content, ...mobile.content } } : block;
}
