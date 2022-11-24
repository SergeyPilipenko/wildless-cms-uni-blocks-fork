export const description = 'v0.6.17';

export default (unitPath, content) => {
  if (!content?.slots) {
    return content;
  }

  adjustRootSlots(content.slots);

  return { ...content };
};

function adjustRootSlots(slots) {
  for (let slot of slots) {
    if (Array.isArray(slot)) {
      return;
    }
    const slotBlocks = slot.blocks;
    slot = slotBlocks;
  }
}
