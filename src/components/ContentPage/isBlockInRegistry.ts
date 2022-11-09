import type { BlocksRegistry } from '../../model/BlocksRegistry';

export function isBlockInRegistry(blockType: string | undefined, registry: BlocksRegistry) {
  return (blockType || '') in registry;
}
