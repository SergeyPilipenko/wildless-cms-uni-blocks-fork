import type { BlockAncestors } from './BlockDecorator';
import type { BlockDef } from './ContentPageDef';

export function getParentBlockDef(ancestors: BlockAncestors | undefined, type?: string): BlockDef {
  const [, block] =
    (ancestors || [])
      .map((i) => i)
      .reverse()
      .find(([, _]) => !type || type === (_ as BlockDef)?.type) || [];

  return block || {};
}
