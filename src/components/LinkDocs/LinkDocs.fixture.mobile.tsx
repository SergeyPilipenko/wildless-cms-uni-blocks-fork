import '../../react/setup-fixture';
import { LinkDocs } from './LinkDocs';
import { linkDocsContentExample } from './linkDocsContentExample';

export default {
  'vertical (default)': (
    <div className="container grid grid-cols-12">
      <LinkDocs className="col-span-12" {...linkDocsContentExample} />
    </div>
  ),
  'vertical, no border': (
    <div className="container grid grid-cols-12">
      <LinkDocs className="col-span-12" hasBorder={false} {...linkDocsContentExample} />
    </div>
  ),
  'horizontal, swipe list': (
    <div className="container grid grid-cols-12">
      <LinkDocs className="col-span-12" {...linkDocsContentExample} orientation="horizontal" />
    </div>
  ),
};
