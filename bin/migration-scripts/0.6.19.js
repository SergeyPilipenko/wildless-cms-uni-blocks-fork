export const description = 'v0.6.19';

export default (unitPath, content) => {
  if (!content?.slots) {
    return content;
  }

  adjustRootSlots(content.slots);

  return { ...content };
};

function adjustRootSlots(slots) {
  Object.keys(slots).forEach((slotKey) => {
    if (Array.isArray(slots[slotKey])) {
      return;
    }
    const slotBlocks = slots[slotKey].blocks;
    slots[slotKey] = slotBlocks;
  });
}
