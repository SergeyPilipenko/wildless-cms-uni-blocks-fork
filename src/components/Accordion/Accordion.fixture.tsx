import { context } from '../../setup-fixture';
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

const TEXT_BLOCK_ACCORDION_BLOCK: TextBlockBlockListDef = {
  blockListType: 'TextBlock',
  ...TEXT_BLOCK,
};

const HEADLINE_ACCORDION_BLOCK: HeadlineBlockListDef = {
  blockListType: 'Headline',
  ...HEADLINE,
};

const PICTURE_TEXT_ACCORDION_BLOCK: PictureTextBlockListDef = {
  blockListType: 'PictureText',
  ...PICTURE_TEXT,
};

const LINK_DOCS_ACCORDION_BLOCK: LinkDocsBlockListDef = {
  blockListType: 'LinkDocs',
  ...linkDocsContentExample,
  title: '',
};

const TILES_ACCORDION_BLOCK: TileBlockListDef = {
  blockListType: 'Tile',
  ...TILE,
};

const PRODUCT_TILES_ACCORDION_BLOCK: ProductTileBlockListDef = {
  blockListType: 'ProductTile',
  ...PRODUCT_TILE,
};

const GALLERY_ACCORDION_BLOCK: GalleryBlockListDef = {
  blockListType: 'Gallery',
  ...GALLERY,
};

const MINI_GALLERY_ACCORDION_BLOCK: MiniGalleryBlockListDef = {
  blockListType: 'MiniGallery',
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
