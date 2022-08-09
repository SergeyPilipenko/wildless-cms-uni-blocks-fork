import { BlockDef } from '../../types';

export function isBlockInRegistry<T>(block: BlockDef, registry: Record<string, T>) {
  return block.type in registry;
}
