export const getAccordionItems = (items) =>
  items?.map((item) => ({
    label: item.text || '',
    blocks: [
      {
        accordionBlockType: 'LinkDocs',
        documents: item.items || [],
      },
    ],
  }));
