import { context } from '../../setup-fixture';
import { PRODUCT_BLOCK } from '../ProductBlock/ProductBlock.fixture';
import { PRODUCT_TILE, PRODUCT_PENSION_TILE } from '../ProductTile/ProductTile.fixture';
import { TEXT_BLOCK } from '../TextBlock/TextBlock.fixture';
import { TILE, TILE_PREMIUM } from '../Tile/Tile.fixture';
import type { OtherProductsProps } from './OtherProducts';
import { OtherProducts } from './OtherProducts';
import type {
  ProductBlockBlockListDef,
  ProductTileBlockListDef,
  TextBlockBlockListDef,
  TileBlockListDef,
} from '../../ui-kit/BlocksList/BlocksListProps';

const TEXT_BLOCK_OTHER_BLOCK: TextBlockBlockListDef = {
  blockListType: 'TextBlock',
  ...TEXT_BLOCK,
};

const PRODUCT_BLOCK_OTHER_BLOCK: ProductBlockBlockListDef = {
  blockListType: 'ProductBlock',
  ...PRODUCT_BLOCK,
};

const TILES_OTHER_BLOCK: TileBlockListDef = {
  blockListType: 'Tile',
  ...TILE,
};

const TILES_PREMIUM_OTHER_BLOCK: TileBlockListDef = {
  blockListType: 'Tile',
  ...TILE_PREMIUM,
};

const PRODUCT_TILES_OTHER_BLOCK: ProductTileBlockListDef = {
  blockListType: 'ProductTile',
  ...PRODUCT_TILE,
};

const PRODUCT_PENSION_TILES__OTHER_BLOCK: ProductTileBlockListDef = {
  blockListType: 'ProductTile',
  ...PRODUCT_PENSION_TILE,
};

const propsBlock: OtherProductsProps = {
  context,
  blockItems: [
    {
      label: 'Другие кредитные карты Россельхозбанка 1',
      blocks: [
        TILES_PREMIUM_OTHER_BLOCK,
        TILES_PREMIUM_OTHER_BLOCK,
        TILES_OTHER_BLOCK,
        TILES_OTHER_BLOCK,
      ],
    },
    {
      label: 'Другие кредитные карты Россельхозбанка 2',
      blocks: [
        PRODUCT_TILES_OTHER_BLOCK,
        PRODUCT_TILES_OTHER_BLOCK,
        PRODUCT_PENSION_TILES__OTHER_BLOCK,
        PRODUCT_PENSION_TILES__OTHER_BLOCK,
      ],
    },
    {
      label: 'Другие кредитные карты Россельхозбанка 3',
      blocks: [PRODUCT_BLOCK_OTHER_BLOCK, PRODUCT_BLOCK_OTHER_BLOCK],
    },

    {
      label: 'Другие кредитные карты Россельхозбанка 4',
      blocks: [
        TEXT_BLOCK_OTHER_BLOCK,
        TEXT_BLOCK_OTHER_BLOCK,
        TEXT_BLOCK_OTHER_BLOCK,
        TEXT_BLOCK_OTHER_BLOCK,
      ],
    },
  ],
};

const propsTwoColumns: OtherProductsProps = {
  context,
  blockItems: [
    {
      label: 'Другие кредитные карты Россельхозбанка 1',
      blocks: [
        TILES_PREMIUM_OTHER_BLOCK,
        TILES_PREMIUM_OTHER_BLOCK,
        TILES_OTHER_BLOCK,
        TILES_OTHER_BLOCK,
      ],
      columns: 2,
    },
    {
      label: 'Другие кредитные карты Россельхозбанка 2',
      blocks: [
        PRODUCT_TILES_OTHER_BLOCK,
        PRODUCT_TILES_OTHER_BLOCK,
        PRODUCT_PENSION_TILES__OTHER_BLOCK,
        PRODUCT_PENSION_TILES__OTHER_BLOCK,
      ],
      columns: 2,
    },
    {
      label: 'Другие кредитные карты Россельхозбанка 3',
      blocks: [PRODUCT_BLOCK_OTHER_BLOCK, PRODUCT_BLOCK_OTHER_BLOCK],
      columns: 2,
    },

    {
      label: 'Другие кредитные карты Россельхозбанка 4',
      blocks: [
        TEXT_BLOCK_OTHER_BLOCK,
        TEXT_BLOCK_OTHER_BLOCK,
        TEXT_BLOCK_OTHER_BLOCK,
        TEXT_BLOCK_OTHER_BLOCK,
      ],
      columns: 2,
    },
  ],
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <OtherProducts className="col-span-12" {...propsBlock} />
    </div>
  ),

  'two columns': (
    <div className="container grid grid-cols-12">
      <OtherProducts className="col-span-12" {...propsTwoColumns} />
    </div>
  ),
};
