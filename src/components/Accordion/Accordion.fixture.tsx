import { context } from '../../setup-fixture';
import { defaultProps as GALLERY } from '../Gallery/Gallery.fixture';
import { HEADLINE } from '../Headline/Headline.fixture';
import { linkDocsContentExample } from '../LinkDocs/linkDocsContentExample';
import { defaultProps as MINI_GALLERY } from '../MiniGallery/MiniGallery.fixture';
import { PICTURE_TEXT } from '../PictureText/PictureText.fixture';
import { PRODUCT_BLOCK } from '../ProductBlock/ProductBlock.fixture';
import { PRODUCT_TILE, PRODUCT_PENSION_TILE } from '../ProductTile/ProductTile.fixture';
import { TEXT_BLOCK } from '../TextBlock/TextBlock.fixture';
import { TILE, TILE_PREMIUM } from '../Tile/Tile.fixture';
import type { AccordionProps } from './Accordion';
import { Accordion } from './Accordion';
import type {
  GalleryAccordionBlockDef,
  HeadlineAccordionBlockDef,
  LinkDocsAccordionBlockDef,
  MiniGalleryAccordionBlockDef,
  PictureTextAccordionBlockDef,
  ProductBlockAccordionBlockDef,
  ProductTileAccordionBlockDef,
  TextBlockAccordionBlockDef,
  TileAccordionBlockDef,
} from './AccordionContent';

const TEXT_BLOCK_ACCORDION_BLOCK: TextBlockAccordionBlockDef = {
  accordionBlockType: 'TextBlock',
  ...TEXT_BLOCK,
};

const HEADLINE_ACCORDION_BLOCK: HeadlineAccordionBlockDef = {
  accordionBlockType: 'Headline',
  ...HEADLINE,
};

const PICTURE_TEXT_ACCORDION_BLOCK: PictureTextAccordionBlockDef = {
  accordionBlockType: 'PictureText',
  ...PICTURE_TEXT,
};

const PRODUCT_BLOCK_ACCORDION_BLOCK: ProductBlockAccordionBlockDef = {
  accordionBlockType: 'ProductBlock',
  ...PRODUCT_BLOCK,
};

const LINK_DOCS_ACCORDION_BLOCK: LinkDocsAccordionBlockDef = {
  accordionBlockType: 'LinkDocs',
  ...linkDocsContentExample,
  title: '',
};

const TILES_ACCORDION_BLOCK: TileAccordionBlockDef = {
  accordionBlockType: 'Tile',
  ...TILE,
};

const TILES_PREMIUM_ACCORDION_BLOCK: TileAccordionBlockDef = {
  accordionBlockType: 'Tile',
  ...TILE_PREMIUM,
};

const PRODUCT_TILES_ACCORDION_BLOCK: ProductTileAccordionBlockDef = {
  accordionBlockType: 'ProductTile',
  ...PRODUCT_TILE,
};

const PRODUCT_PENSION_TILES__ACCORDION_BLOCK: ProductTileAccordionBlockDef = {
  accordionBlockType: 'ProductTile',
  ...PRODUCT_PENSION_TILE,
};

const GALLERY_ACCORDION_BLOCK: GalleryAccordionBlockDef = {
  accordionBlockType: 'Gallery',
  ...GALLERY,
};

const MINI_GALLERY_ACCORDION_BLOCK: MiniGalleryAccordionBlockDef = {
  accordionBlockType: 'MiniGallery',
  ...MINI_GALLERY,
};

const propsBlock: AccordionProps = {
  context,
  accordionItems: [
    {
      label: 'Accordion label 1',
      blocks: [TEXT_BLOCK_ACCORDION_BLOCK, TEXT_BLOCK_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 2',
      blocks: [PICTURE_TEXT_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 3',
      blocks: [HEADLINE_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 4',
      blocks: [LINK_DOCS_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 5',
      blocks: [TILES_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 6',
      blocks: [PRODUCT_TILES_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 7',
      blocks: [GALLERY_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 8',
      blocks: [MINI_GALLERY_ACCORDION_BLOCK],
    },
  ],
};

const propsTwoColumns: AccordionProps = {
  context,
  accordionItems: [
    {
      label: 'Другие продукты Россельхозбанка 1',
      blocks: [
        TILES_PREMIUM_ACCORDION_BLOCK,
        TILES_PREMIUM_ACCORDION_BLOCK,
        TILES_ACCORDION_BLOCK,
        TILES_ACCORDION_BLOCK,
      ],
      columns: 2,
    },
    {
      label: 'Другие продукты Россельхозбанка 2',
      blocks: [
        PRODUCT_TILES_ACCORDION_BLOCK,
        PRODUCT_TILES_ACCORDION_BLOCK,
        PRODUCT_PENSION_TILES__ACCORDION_BLOCK,
        PRODUCT_PENSION_TILES__ACCORDION_BLOCK,
      ],
      columns: 2,
    },
    {
      label: 'Другие продукты Россельхозбанка 3',
      blocks: [PRODUCT_BLOCK_ACCORDION_BLOCK, PRODUCT_BLOCK_ACCORDION_BLOCK],
      columns: 2,
    },

    {
      label: 'Другие продукты Россельхозбанка 4',
      blocks: [
        TEXT_BLOCK_ACCORDION_BLOCK,
        TEXT_BLOCK_ACCORDION_BLOCK,
        TEXT_BLOCK_ACCORDION_BLOCK,
        TEXT_BLOCK_ACCORDION_BLOCK,
      ],
      columns: 2,
    },
  ],
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Accordion className="col-span-12" {...propsBlock} />
    </div>
  ),

  'two columns': (
    <div className="container grid grid-cols-12">
      <Accordion className="col-span-12" {...propsTwoColumns} />
    </div>
  ),
};
