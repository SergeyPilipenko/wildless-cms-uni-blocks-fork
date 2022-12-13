import '../../react/setup-fixture';
import { Gallery } from '../Gallery/Gallery';
import { defaultProps as GALLERY } from '../Gallery/Gallery.fixture';
import { Headline } from '../Headline/Headline';
import { HEADLINE } from '../Headline/Headline.fixture';
import { LinkDocs } from '../LinkDocs/LinkDocs';
import { linkDocsContentExample } from '../LinkDocs/linkDocsContentExample';
import { MiniGallery } from '../MiniGallery/MiniGallery';
import { defaultProps as MINI_GALLERY } from '../MiniGallery/MiniGallery.fixture';
import { OtherProductsItem } from '../OtherProductsItem/OtherProductsItem';
import { PictureText } from '../PictureText/PictureText';
import { PICTURE_TEXT } from '../PictureText/PictureText.fixture';
import { ProductBlock } from '../ProductBlock/ProductBlock';
import { PRODUCT_BLOCK } from '../ProductBlock/ProductBlock.fixture';
import { ProductTile } from '../ProductTile/ProductTile';
import { PRODUCT_PENSION_TILE, PRODUCT_TILE } from '../ProductTile/ProductTile.fixture';
import { TextBlock } from '../TextBlock/TextBlock';
import { TEXT_BLOCK } from '../TextBlock/TextBlock.fixture';
import { Tile } from '../Tile/Tile';
import { TILE, TILE_PREMIUM } from '../Tile/Tile.fixture';
import { OtherProducts } from './OtherProducts';

const TEXT_BLOCK_OTHER_BLOCK = <TextBlock className="col-span-12" {...TEXT_BLOCK} />;

const PRODUCT_BLOCK_OTHER_BLOCK = <ProductBlock className="col-span-6" {...PRODUCT_BLOCK} />;

const TILES_OTHER_BLOCK = <Tile className="col-span-12" {...TILE} />;

const TILES_PREMIUM_OTHER_BLOCK = <Tile className="col-span-6" {...TILE_PREMIUM} />;

const PRODUCT_TILES_OTHER_BLOCK = <ProductTile className="col-span-6" {...PRODUCT_TILE} />;

const PRODUCT_PENSION_TILES_OTHER_BLOCK = (
  <ProductTile className="col-span-6" {...PRODUCT_PENSION_TILE} />
);

const HEADLINE_OTHER_BLOCK = <Headline className="col-span-12" {...HEADLINE} />;

const PICTURE_TEXT_OTHER_BLOCK = <PictureText className="col-span-12" {...PICTURE_TEXT} />;

const LINK_DOCS_OTHER_BLOCK = <LinkDocs className="col-span-12" {...linkDocsContentExample} />;

const GALLERY_OTHER_BLOCK = <Gallery className="col-span-12" {...GALLERY} />;

const MINI_GALLERY_OTHER_BLOCK = <MiniGallery className="col-span-12" {...MINI_GALLERY} />;

export const OTHER_PRODUCTS_ITEM = (
  <OtherProductsItem label="OtherProducts №1 Tiles">
    {[TILES_PREMIUM_OTHER_BLOCK, TILES_PREMIUM_OTHER_BLOCK, TILES_OTHER_BLOCK, TILES_OTHER_BLOCK]}
  </OtherProductsItem>
);

export default {
  default: (
    <div className="container grid grid-cols-12">
      <OtherProducts className="col-span-12">
        {OTHER_PRODUCTS_ITEM}
        <OtherProductsItem label="OtherProducts №2 Product_Tiles">
          {[
            PRODUCT_TILES_OTHER_BLOCK,
            PRODUCT_TILES_OTHER_BLOCK,
            PRODUCT_PENSION_TILES_OTHER_BLOCK,
            PRODUCT_PENSION_TILES_OTHER_BLOCK,
          ]}
        </OtherProductsItem>
        <OtherProductsItem label="OtherProducts №3 Product_Block">
          {[PRODUCT_BLOCK_OTHER_BLOCK, PRODUCT_BLOCK_OTHER_BLOCK]}
        </OtherProductsItem>
        <OtherProductsItem label="OtherProducts №4 Text_Block">
          {[
            TEXT_BLOCK_OTHER_BLOCK,
            TEXT_BLOCK_OTHER_BLOCK,
            TEXT_BLOCK_OTHER_BLOCK,
            TEXT_BLOCK_OTHER_BLOCK,
          ]}
        </OtherProductsItem>
        <OtherProductsItem label="OtherProducts №5 Picture_Text">
          {[PICTURE_TEXT_OTHER_BLOCK]}
        </OtherProductsItem>
        <OtherProductsItem label="OtherProducts №6 Headline">
          {[HEADLINE_OTHER_BLOCK]}
        </OtherProductsItem>
        <OtherProductsItem label="OtherProducts №7 Link_Docs">
          {[LINK_DOCS_OTHER_BLOCK]}
        </OtherProductsItem>
        <OtherProductsItem label="OtherProducts №8 Gallery">
          {[GALLERY_OTHER_BLOCK, GALLERY_OTHER_BLOCK]}
        </OtherProductsItem>
        <OtherProductsItem label="OtherProducts №9 Mini_Gallery">
          {[MINI_GALLERY_OTHER_BLOCK, MINI_GALLERY_OTHER_BLOCK]}
        </OtherProductsItem>
      </OtherProducts>
    </div>
  ),
};
