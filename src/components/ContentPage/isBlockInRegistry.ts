import { BlocksRegistry } from './ContentPage';

export function isBlockInRegistry(blockType: string | undefined, registry: BlocksRegistry) {
  return (blockType || '') in registry;
}
