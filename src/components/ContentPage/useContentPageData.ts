import { useEffect, useState } from 'react';
import type { BlocksRegistry } from '../../model/BlocksRegistry';
import type { BlockDef, ContentPageDef } from '../../model/ContentPageDef';
import baseData from './ContentPage.page.json';

const BLOCK_TYPES_BLACK_LIST = [
  'Header',
  'Footer',
  'Placeholder',
  'AccordionItem',
  'OtherProductsItem',
];

export function useContentPageData(blocksRegistry: BlocksRegistry): ContentPageDef {
  const [data, setData] = useState<ContentPageDef>(baseData);

  useEffect(() => {
    contentPageData(blocksRegistry).then((_) => setData(_));
  }, []);

  return data;
}

const contentPageData = async (blocksRegistry: BlocksRegistry): Promise<ContentPageDef> => ({
  ...baseData,
  blocks: await Promise.all(
    Object.keys(blocksRegistry)
      .filter((type) => !BLOCK_TYPES_BLACK_LIST.includes(type))
      .sort()
      .map(
        async (type): Promise<BlockDef> => ({
          type,
          style: ['col-span-12'],
          content: {},
          ...(await blockContentExample(type)),
        }),
      ),
  ),
});

async function blockContentExample(type: string) {
  try {
    return (await import(`../${type}/${type}.example.json`)).default;
  } catch (ex) {
    // Do nothing
  }

  return {};
}
