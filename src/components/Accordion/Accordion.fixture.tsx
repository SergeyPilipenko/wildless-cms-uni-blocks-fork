import { context } from '../../react/setup-fixture';
import type {
  GalleryBlockListDef,
  HeadlineBlockListDef,
  LinkDocsBlockListDef,
  MiniGalleryBlockListDef,
  PictureTextBlockListDef,
  ProductTileBlockListDef,
  TextBlockBlockListDef,
  TileBlockListDef,
} from '../../ui-kit/BlocksList/BlocksListProps';
import { defaultProps as GALLERY } from '../Gallery/Gallery.fixture';
import { HEADLINE } from '../Headline/Headline.fixture';
import { linkDocsContentExample } from '../LinkDocs/linkDocsContentExample';
import { defaultProps as MINI_GALLERY } from '../MiniGallery/MiniGallery.fixture';
import { PICTURE_TEXT } from '../PictureText/PictureText.fixture';
import { PRODUCT_TILE } from '../ProductTile/ProductTile.fixture';
import { TEXT_BLOCK } from '../TextBlock/TextBlock.fixture';
import { TILE } from '../Tile/Tile.fixture';
import type { AccordionProps } from './Accordion';
import { Accordion } from './Accordion';

const TEXT_BLOCK_ACCORDION_BLOCK: TextBlockBlockListDef = {
  blockListType: 'TextBlock',
  style: ['col-span-12'],
  ...TEXT_BLOCK,
};

const HEADLINE_ACCORDION_BLOCK: HeadlineBlockListDef = {
  blockListType: 'Headline',
  style: ['col-span-12'],
  ...HEADLINE,
};

const PICTURE_TEXT_ACCORDION_BLOCK: PictureTextBlockListDef = {
  blockListType: 'PictureText',
  style: ['col-span-12'],
  ...PICTURE_TEXT,
};

const LINK_DOCS_ACCORDION_BLOCK: LinkDocsBlockListDef = {
  blockListType: 'LinkDocs',
  style: ['col-span-12'],
  ...linkDocsContentExample,
  title: '',
};

const TILES_ACCORDION_BLOCK: TileBlockListDef = {
  blockListType: 'Tile',
  style: ['col-span-6'],
  ...TILE,
};

const PRODUCT_TILES_ACCORDION_BLOCK: ProductTileBlockListDef = {
  blockListType: 'ProductTile',
  style: ['col-span-6'],
  ...PRODUCT_TILE,
};

const GALLERY_ACCORDION_BLOCK: GalleryBlockListDef = {
  blockListType: 'Gallery',
  style: ['col-span-12'],
  ...GALLERY,
};

const MINI_GALLERY_ACCORDION_BLOCK: MiniGalleryBlockListDef = {
  blockListType: 'MiniGallery',
  style: ['col-span-12'],
  ...MINI_GALLERY,
};

const propsDefaultBlock: AccordionProps = {
  context,
  title: 'Accordion title',
  description: 'Accordion description',
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
      blocks: [TILES_ACCORDION_BLOCK, TILES_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 6',
      blocks: [PRODUCT_TILES_ACCORDION_BLOCK, PRODUCT_TILES_ACCORDION_BLOCK],
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

const propsRightAlignTitleBlock: AccordionProps = {
  context,
  title: 'Accordion title',
  accordionAlignTitle: 'right',
  description: 'Accordion description',
  accordionItems: [
    {
      label: 'Accordion label 1',
      blocks: [TEXT_BLOCK_ACCORDION_BLOCK, TEXT_BLOCK_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 2',
      blocks: [PICTURE_TEXT_ACCORDION_BLOCK],
    },
  ],
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Accordion className="col-span-12" {...propsDefaultBlock} />
    </div>
  ),
  'right-align-title': (
    <div className="container grid grid-cols-12">
      <Accordion className="col-span-12" {...propsRightAlignTitleBlock} />
    </div>
  ),
};
