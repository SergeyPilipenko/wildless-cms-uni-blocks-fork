import { jsonCopy } from '../utils.js';

export const description = 'v0.6.16';

const replaceToContent = (obj, prop) => {
  if (!obj.hasOwnProperty('content')) {
    Object.assign(obj, { content: {} });
  }
  if (obj.hasOwnProperty(prop) && prop) {
    Object.assign(obj.content, { [prop]: obj[prop] });
    Reflect.deleteProperty(obj, prop);
  }
};

export default (unitPath, content) => {
  if (!content?.blocks) {
    return content;
  }

  for (const block of content.blocks) {
    adjustOtherProducts(block);
    adjustAccordion(block);
  }

  return { ...content };
};

const adjustAccordionItems = (accordionItems) =>
  accordionItems.map((item) => {
    item.type = 'AccordionItem';
    item.content = {};
    replaceToContent(item, 'label');
    replaceToContent(item, 'labelIcon');
    replaceToContent(item, 'bordered');

    if (!item?.blocks) {
      return item;
    }
    item.blocks = item.blocks.map((_) => {
      if (_?.blockListType) {
        const { blockListType = '', style, ...rest } = _;

        return {
          content: { ...rest },
          type: blockListType,
          style,
        };
      } else {
        return _;
      }
    });
    return item;
  });

function adjustAccordion(block) {
  if (block.type !== 'Accordion' || !block.content || !block.content?.accordionItems) {
    return;
  }
  const content = block.content;
  content.blocks = adjustAccordionItems(content.accordionItems);
  Reflect.deleteProperty(content, 'accordionItems');
}

const adjustOtherProductsItems = (blockItems) => {
  return blockItems.map((item) => {
    item.type = 'OtherProductsItem';
    replaceToContent(item, 'label');
    if (!item?.blocks) {
      return item;
    }
    item.blocks = item.blocks.map((_) => {
      const { blockListType, style, ...rest } = _;

      return {
        content: { ...rest },
        type: blockListType,
        style,
      };
    });
    return item;
  });
};
function adjustOtherProducts(block) {
  if (block.type !== 'OtherProducts' || !block.content || !block.content.blockItems) {
    return;
  }
  const content = block.content;
  block.blocks = adjustOtherProductsItems(content.blockItems);
  Reflect.deleteProperty(content, 'blockItems');
}
