import { context } from '../../react/setup-fixture';
import { AccordionItem } from '../AccordionItem/AccordionItem';
import { Gallery } from '../Gallery/Gallery';
import { defaultProps as GALLERY } from '../Gallery/Gallery.fixture';
import { Headline } from '../Headline/Headline';
import { HEADLINE } from '../Headline/Headline.fixture';
import { LinkDocs } from '../LinkDocs/LinkDocs';
import { linkDocsContentExample } from '../LinkDocs/linkDocsContentExample';
import { MiniGallery } from '../MiniGallery/MiniGallery';
import { defaultProps as MINI_GALLERY } from '../MiniGallery/MiniGallery.fixture';
import { PictureText } from '../PictureText/PictureText';
import { PICTURE_TEXT } from '../PictureText/PictureText.fixture';
import { ProductTile } from '../ProductTile/ProductTile';
import { PRODUCT_TILE } from '../ProductTile/ProductTile.fixture';
import { TextBlock } from '../TextBlock/TextBlock';
import { TEXT_BLOCK } from '../TextBlock/TextBlock.fixture';
import { Tile } from '../Tile/Tile';
import { TILE } from '../Tile/Tile.fixture';
import { Accordion } from './Accordion';

const TEXT_BLOCK_ACCORDION_BLOCK = (
  <TextBlock className="col-span-12" context={context} {...TEXT_BLOCK} />
);

const HEADLINE_ACCORDION_BLOCK = (
  <Headline className="col-span-12" context={context} {...HEADLINE} />
);

const PICTURE_TEXT_ACCORDION_BLOCK = (
  <PictureText className="col-span-12" context={context} {...PICTURE_TEXT} />
);

const LINK_DOCS_ACCORDION_BLOCK = (
  <LinkDocs className="col-span-12" context={context} {...linkDocsContentExample} title="" />
);

const TILES_ACCORDION_BLOCK = <Tile className="col-span-6" context={context} {...TILE} />;

const PRODUCT_TILES_ACCORDION_BLOCK = (
  <ProductTile className="col-span-6" context={context} {...PRODUCT_TILE} />
);

const GALLERY_ACCORDION_BLOCK = <Gallery className="col-span-12" {...GALLERY} />;

const MINI_GALLERY_ACCORDION_BLOCK = <MiniGallery className="col-span-12" {...MINI_GALLERY} />;

export const ACCORDION_ITEM = (
  <AccordionItem context={context} label="Accordion label 1">
    {[TEXT_BLOCK_ACCORDION_BLOCK, TEXT_BLOCK_ACCORDION_BLOCK]}
  </AccordionItem>
);

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Accordion
        className="col-span-12"
        context={context}
        title="Accordion title"
        description="Accordion description"
      >
        {ACCORDION_ITEM}
        <AccordionItem context={context} label="Accordion label 2">
          {[PICTURE_TEXT_ACCORDION_BLOCK]}
        </AccordionItem>
        <AccordionItem context={context} label="Accordion label 3">
          {[HEADLINE_ACCORDION_BLOCK]}
        </AccordionItem>
        <AccordionItem context={context} label="Accordion label 4">
          {[LINK_DOCS_ACCORDION_BLOCK]}
        </AccordionItem>
        <AccordionItem context={context} label="Accordion label 5">
          {[TILES_ACCORDION_BLOCK, TILES_ACCORDION_BLOCK]}
        </AccordionItem>
        <AccordionItem context={context} label="Accordion label 6">
          {[PRODUCT_TILES_ACCORDION_BLOCK, PRODUCT_TILES_ACCORDION_BLOCK]}
        </AccordionItem>
        <AccordionItem context={context} label="Accordion label 7">
          {[GALLERY_ACCORDION_BLOCK]}
        </AccordionItem>
        <AccordionItem context={context} label="Accordion label 8">
          {[MINI_GALLERY_ACCORDION_BLOCK]}
        </AccordionItem>
      </Accordion>
    </div>
  ),
  'right-align-title': (
    <div className="container grid grid-cols-12">
      <Accordion
        className="col-span-12"
        context={context}
        title="Accordion title"
        accordionAlignTitle="right"
        description="Accordion description"
      >
        <AccordionItem context={context} label="Accordion label 1">
          {[TEXT_BLOCK_ACCORDION_BLOCK, TEXT_BLOCK_ACCORDION_BLOCK]}
        </AccordionItem>
        <AccordionItem context={context} label="Accordion label 2">
          {[PICTURE_TEXT_ACCORDION_BLOCK]}
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
