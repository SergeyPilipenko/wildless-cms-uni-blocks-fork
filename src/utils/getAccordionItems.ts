export const getAccordionItems = (items) =>
  items?.map((item) => ({
    label: item.text || '',
    blocks: [
      {
        accordionBlockType: 'LinkList',
        documents: item.items || [],
      },
    ],
  }));
