import { GroupBlockDef } from './BlocksTypeProps';

export const filterBlocksByTag = (blocks: GroupBlockDef[], tag?: string) => {
  return tag ? blocks.filter((block) => block?.tags?.includes(tag)) : blocks;
};
