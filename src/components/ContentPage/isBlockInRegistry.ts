export function isBlockInRegistry<T>(blockType: string | undefined, registry: Record<string, T>) {
  return (blockType || '') in registry;
}
