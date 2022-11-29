import type { BlockAncestors } from './BlockDecorator';
import type { BlockDef } from './ContentPageDef';

export function getParentBlockDef(ancestors: BlockAncestors | undefined, type?: string): BlockDef {
  const [block] =
    (ancestors || [])
      .map((item) => item)
      .reverse()
      .find(([_]) => _ && 'type' in _ && (!type || type === (_ as BlockDef).type)) || [];

  return block || {};
}
