export const description = 'v0.5.10';

export default (unitPath, content) => {
  if (!content?.blocks) {
    return content;
  }

  for (const block of content.blocks) {
    adjustBonusBlock(block);
  }

  return { ...content };
};

function adjustBonusBlock(block) {
  if (
    block.type !== 'Bonus' ||
    !block.content ||
    !block.content.bonusItems ||
    !block.content.bonusItems.every((i) => i.bonusCount || i.bonusName)
  ) {
    return;
  }

  if (block.content) {
    for (const item of block.content.bonusItems) {
      item.bonusItemContent = {
        bonusType: 'count',
        bonusCount: item.bonusCount,
        bonusName: item.bonusName,
      };
      Reflect.deleteProperty(item, 'bonusCount');
      Reflect.deleteProperty(item, 'bonusName');
    }
  }
}
