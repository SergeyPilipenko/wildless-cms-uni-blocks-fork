import { context } from '../../react/setup-fixture';
import { defaultProps as GALLERY } from '../Gallery/Gallery.fixture';
import { HEADLINE } from '../Headline/Headline.fixture';
import { linkDocsContentExample } from '../LinkDocs/linkDocsContentExample';
import { defaultProps as MINI_GALLERY } from '../MiniGallery/MiniGallery.fixture';
import { PICTURE_TEXT } from '../PictureText/PictureText.fixture';
import { PRODUCT_BLOCK } from '../ProductBlock/ProductBlock.fixture';
import { PRODUCT_PENSION_TILE, PRODUCT_TILE } from '../ProductTile/ProductTile.fixture';
import { TEXT_BLOCK } from '../TextBlock/TextBlock.fixture';
import { TILE, TILE_PREMIUM } from '../Tile/Tile.fixture';
import type { OtherProductsProps } from './OtherProducts';
import { OtherProducts } from './OtherProducts';

import type {
  GalleryBlockListDef,
  HeadlineBlockListDef,
  LinkDocsBlockListDef,
  MiniGalleryBlockListDef,
  PictureTextBlockListDef,
  ProductBlockBlockListDef,
  ProductTileBlockListDef,
  TextBlockBlockListDef,
  TileBlockListDef,
} from '../../ui-kit/BlocksList/BlocksListProps';

const TEXT_BLOCK_OTHER_BLOCK: TextBlockBlockListDef = {
  blockListType: 'TextBlock',
  style: ['col-span-12'],
  ...TEXT_BLOCK,
};

const PRODUCT_BLOCK_OTHER_BLOCK: ProductBlockBlockListDef = {
  blockListType: 'ProductBlock',
  style: ['col-span-6'],
  ...PRODUCT_BLOCK,
};

const TILES_OTHER_BLOCK: TileBlockListDef = {
  blockListType: 'Tile',
  style: ['col-span-12'],
  ...TILE,
};

const TILES_PREMIUM_OTHER_BLOCK: TileBlockListDef = {
  blockListType: 'Tile',
  style: ['col-span-6'],
  ...TILE_PREMIUM,
};

const PRODUCT_TILES_OTHER_BLOCK: ProductTileBlockListDef = {
  blockListType: 'ProductTile',
  style: ['col-span-6'],
  ...PRODUCT_TILE,
};

const PRODUCT_PENSION_TILES_OTHER_BLOCK: ProductTileBlockListDef = {
  blockListType: 'ProductTile',
  style: ['col-span-6'],
  ...PRODUCT_PENSION_TILE,
};

const HEADLINE_OTHER_BLOCK: HeadlineBlockListDef = {
  blockListType: 'Headline',
  style: ['col-span-12'],
  ...HEADLINE,
};

const PICTURE_TEXT_OTHER_BLOCK: PictureTextBlockListDef = {
  blockListType: 'PictureText',
  style: ['col-span-12'],
  ...PICTURE_TEXT,
};

const LINK_DOCS_OTHER_BLOCK: LinkDocsBlockListDef = {
  blockListType: 'LinkDocs',
  style: ['col-span-12'],
  ...linkDocsContentExample,
};

const GALLERY_OTHER_BLOCK: GalleryBlockListDef = {
  blockListType: 'Gallery',
  style: ['col-span-12'],
  ...GALLERY,
};

const MINI_GALLERY_OTHER_BLOCK: MiniGalleryBlockListDef = {
  blockListType: 'MiniGallery',
  style: ['col-span-12'],
  ...MINI_GALLERY,
};

const propsBlock: OtherProductsProps = {
  context,
  colorPalette: 'pc',
  blockItems: [
    {
      label: 'OtherProducts №1 Tiles',
      blocks: [
        TILES_PREMIUM_OTHER_BLOCK,
        TILES_PREMIUM_OTHER_BLOCK,
        TILES_OTHER_BLOCK,
        TILES_OTHER_BLOCK,
      ],
    },
    {
      label: 'OtherProducts №2 Product_Tiles',
      blocks: [
        PRODUCT_TILES_OTHER_BLOCK,
        PRODUCT_TILES_OTHER_BLOCK,
        PRODUCT_PENSION_TILES_OTHER_BLOCK,
        PRODUCT_PENSION_TILES_OTHER_BLOCK,
      ],
    },
    {
      label: 'OtherProducts №3 Product_Block',
      blocks: [PRODUCT_BLOCK_OTHER_BLOCK, PRODUCT_BLOCK_OTHER_BLOCK],
    },
    {
      label: 'OtherProducts №4 Text_Block',
      blocks: [
        TEXT_BLOCK_OTHER_BLOCK,
        TEXT_BLOCK_OTHER_BLOCK,
        TEXT_BLOCK_OTHER_BLOCK,
        TEXT_BLOCK_OTHER_BLOCK,
      ],
    },
    {
      label: 'OtherProducts №5 Picture_Text',
      blocks: [PICTURE_TEXT_OTHER_BLOCK],
    },
    {
      label: 'OtherProducts №6 Headline',
      blocks: [HEADLINE_OTHER_BLOCK],
    },
    {
      label: 'OtherProducts №7 Link_Docs',
      blocks: [LINK_DOCS_OTHER_BLOCK],
    },
    {
      label: 'OtherProducts №8 Gallery',
      blocks: [GALLERY_OTHER_BLOCK, GALLERY_OTHER_BLOCK],
    },
    {
      label: 'OtherProducts №9 Mini_Gallery',
      blocks: [MINI_GALLERY_OTHER_BLOCK, MINI_GALLERY_OTHER_BLOCK],
    },
  ],
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <OtherProducts className="col-span-12" {...propsBlock} />
    </div>
  ),
};
