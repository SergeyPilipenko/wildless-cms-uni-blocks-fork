import { renameProp } from '../utils.js';

export const description = 'v0.5.14';

export default (unitPath, content) => {
  if (!content?.blocks) {
    return content;
  }

  for (const block of content.blocks) {
    adjustGalleryBlock(block);
  }

  return { ...content };
};

function adjustGalleryBlock(block) {
  if (block.type !== 'Gallery' || !block.content || !block.content.cards) {
    return;
  }

  for (const item of block.content.cards) {
    if (item.image) {
      renameProp(item, 'image', 'icon');
    }
  }
}
