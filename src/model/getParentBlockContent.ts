import type { BlockAncestors } from './BlockDecorator';
import { getParentBlockDef } from './getParentBlockDef';

export function getParentBlockContent<C extends Record<string, any>>(
  ancestors: BlockAncestors | undefined,
  defaultContent: C,
): C {
  const { content } = getParentBlockDef(ancestors);

  return (content as C) || defaultContent;
}
