import { context } from '../../react/setup-fixture';
import { ProductTile } from '../ProductTile/ProductTile';
import { PRODUCT_TILE } from '../ProductTile/ProductTile.fixture';
import { VerticalLayout } from './VerticalLayout';

const PRODUCT_TILES_OTHER_BLOCK = <ProductTile context={context} {...PRODUCT_TILE} />;

export default {
  default: (
    <div className="container grid grid-cols-12">
      <VerticalLayout context={context} className="col-span-12">
        {PRODUCT_TILES_OTHER_BLOCK}
        {PRODUCT_TILES_OTHER_BLOCK}
      </VerticalLayout>
    </div>
  ),
  'transparent center': (
    <div className="container grid grid-cols-12">
      <VerticalLayout
        align="center"
        version="transparent"
        context={context}
        className="col-span-12"
      >
        {PRODUCT_TILES_OTHER_BLOCK}
        {PRODUCT_TILES_OTHER_BLOCK}
      </VerticalLayout>
    </div>
  ),
  'secondary right': (
    <div className="container grid grid-cols-12">
      <VerticalLayout align="right" version="secondary" context={context} className="col-span-12">
        {PRODUCT_TILES_OTHER_BLOCK}
        {PRODUCT_TILES_OTHER_BLOCK}
      </VerticalLayout>
    </div>
  ),
  'secondary gap-XL': (
    <div className="container grid grid-cols-12">
      <VerticalLayout
        gap="XL"
        align="left"
        version="secondary"
        context={context}
        className="col-span-12"
      >
        {PRODUCT_TILES_OTHER_BLOCK}
        {PRODUCT_TILES_OTHER_BLOCK}
      </VerticalLayout>
    </div>
  ),
};
