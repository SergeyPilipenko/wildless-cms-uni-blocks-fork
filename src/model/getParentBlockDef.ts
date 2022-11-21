import type { BlockAncestors } from './BlockDecorator';
import type { BlockDef } from './ContentPageDef';

export function getParentBlockDef(ancestors: BlockAncestors | undefined, type?: string): BlockDef {
  const [, ...blocks] = ancestors || [];

  return blocks.reverse().find((_) => !type || type === (_ as BlockDef)?.type) || {};
}
