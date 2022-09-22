import { context } from '../../react/setup-fixture';
import { PRODUCT_BLOCK } from '../ProductBlock/ProductBlock.fixture';
import { PRODUCT_TILE } from '../ProductTile/ProductTile.fixture';
import type { ProductBlockDef, ProductTileDef } from './BlocksTypeProps';
import { GroupBlock } from './GroupBlock';
import groupBlockExample from './GroupBlock.example.json';

const PRODUCT_TILE_GROUP_BLOCK: ProductTileDef = {
  blockType: 'ProductTile',
  tags: ['tag2'],
  style: ['col-span-6'],
  ...PRODUCT_TILE,
};

const PRODUCT_TILE_GROUP_BLOCK2: ProductTileDef = {
  blockType: 'ProductTile',
  tags: ['tag2'],
  style: ['col-span-6'],
  ...PRODUCT_TILE,
};

const PRODUCT_BLOCK_GROUP_BLOCK: ProductBlockDef = {
  blockType: 'ProductBlock',
  tags: ['tag1'],
  style: ['col-span-12'],
  ...PRODUCT_BLOCK,
};

const PRODUCT_BLOCK_GROUP_BLOCK2: ProductBlockDef = {
  blockType: 'ProductBlock',
  style: ['col-span-12'],
  ...PRODUCT_BLOCK,
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <GroupBlock
        context={context}
        className="col-span-12"
        tabs={groupBlockExample.tabs}
        isShowCounter={true}
        groupBlocks={[
          PRODUCT_TILE_GROUP_BLOCK,
          PRODUCT_TILE_GROUP_BLOCK2,
          PRODUCT_BLOCK_GROUP_BLOCK,
          PRODUCT_BLOCK_GROUP_BLOCK2,
        ]}
      />
    </div>
  ),
  'without-counter': (
    <div className="container grid grid-cols-12">
      <GroupBlock
        context={context}
        className="col-span-12"
        tabs={groupBlockExample.tabs}
        groupBlocks={[
          PRODUCT_TILE_GROUP_BLOCK,
          PRODUCT_TILE_GROUP_BLOCK2,
          PRODUCT_BLOCK_GROUP_BLOCK,
          PRODUCT_BLOCK_GROUP_BLOCK2,
        ]}
      />
    </div>
  ),
};
