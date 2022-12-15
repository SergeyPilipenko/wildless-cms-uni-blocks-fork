import '../../react/setup-fixture';
import { LinkDocs } from '../LinkDocs/LinkDocs';
import { LinkDocsContent } from '../LinkDocs/LinkDocsContent';
import { ProductTile } from '../ProductTile/ProductTile';
import { PRODUCT_TILE } from '../ProductTile/ProductTile.fixture';
import { RollupItem } from '../RollupItem/RollupItem';
import { TextBlock } from '../TextBlock/TextBlock';
import { TEXT_BLOCK } from '../TextBlock/TextBlock.fixture';
import { VerticalLayout } from './VerticalLayout';

const PRODUCT_TILES_OTHER_BLOCK = <ProductTile {...PRODUCT_TILE} />;
const TEXT_BLOCK_ACCORDION_BLOCK = <TextBlock className="col-span-12" {...TEXT_BLOCK} />;
export const linkDocsExample: LinkDocsContent = {
  description: 'Ответы на часто задаваемые вопросы',
  documents: [
    { text: 'target self', href: '/abc1/cooldoc.doc', target: '_self' },
    { text: 'target blank', href: '/abc2/wtf.rtf', target: '_blank' },
    { text: 'GlassIcon', href: '/abc3/map.jpeg' },
  ],
};
export default {
  default: (
    <div className="container grid grid-cols-12">
      <VerticalLayout className="col-span-12">
        {PRODUCT_TILES_OTHER_BLOCK}
        {PRODUCT_TILES_OTHER_BLOCK}
      </VerticalLayout>
    </div>
  ),
  'transparent center': (
    <div className="container grid grid-cols-12">
      <VerticalLayout align="center" version="transparent" className="col-span-12">
        {PRODUCT_TILES_OTHER_BLOCK}
        {PRODUCT_TILES_OTHER_BLOCK}
      </VerticalLayout>
    </div>
  ),
  'secondary right': (
    <div className="container grid grid-cols-12">
      <VerticalLayout align="right" version="secondary" className="col-span-12">
        {PRODUCT_TILES_OTHER_BLOCK}
        {PRODUCT_TILES_OTHER_BLOCK}
      </VerticalLayout>
    </div>
  ),
  'secondary gap-XL': (
    <div className="container grid grid-cols-12">
      <VerticalLayout gap="XL" align="left" version="secondary" className="col-span-12">
        {PRODUCT_TILES_OTHER_BLOCK}
        {PRODUCT_TILES_OTHER_BLOCK}
      </VerticalLayout>
    </div>
  ),
  rollup: (
    <div className="container grid grid-cols-12">
      <VerticalLayout align="left" className="col-span-12" version="primary">
        <RollupItem label="Rollup button 1">
          {[TEXT_BLOCK_ACCORDION_BLOCK, TEXT_BLOCK_ACCORDION_BLOCK]}
        </RollupItem>
        <RollupItem isExpanded={true} label="Rollup button 1">
          <LinkDocs className="col-span-12" {...linkDocsExample} />
        </RollupItem>
      </VerticalLayout>
    </div>
  ),
  'rollup secondary': (
    <div className="container grid grid-cols-12">
      <VerticalLayout gap="XS" align="left" version="transparent" className="col-span-12">
        <RollupItem
          label="Rollup button 1 with TEXT_BLOCK"
          version="secondary"
          isFoldButtonOnTop={false}
        >
          {[TEXT_BLOCK_ACCORDION_BLOCK, TEXT_BLOCK_ACCORDION_BLOCK]}
        </RollupItem>
        <RollupItem
          label="Rollup button 2 with TEXT_BLOCK"
          version="secondary"
          isFoldButtonOnTop={false}
        >
          {[TEXT_BLOCK_ACCORDION_BLOCK, TEXT_BLOCK_ACCORDION_BLOCK]}
        </RollupItem>
      </VerticalLayout>
    </div>
  ),
};
