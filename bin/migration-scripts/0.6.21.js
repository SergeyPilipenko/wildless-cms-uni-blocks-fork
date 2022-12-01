export const description = 'v0.6.21';

export default (unitPath, content) => {
  if (!content?.blocks || !content?.slots) {
    return content;
  }

  const footer = content.blocks.find(({ type }) => type === 'Footer');
  if (footer) {
    content.slots.footer = [footer];
    content.blocks = content.blocks.filter((block) => block.type !== 'Footer');
  }

  return { ...content };
};
