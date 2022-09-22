import { mobileContext } from '../../react/setup-fixture';
import { LinkDocs } from './LinkDocs';
import { linkDocsContentExample } from './linkDocsContentExample';

export default {
  'vertical (default)': (
    <div className="container grid grid-cols-12">
      <LinkDocs className="col-span-12" context={mobileContext} {...linkDocsContentExample} />
    </div>
  ),
  'vertical, no border': (
    <div className="container grid grid-cols-12">
      <LinkDocs
        className="col-span-12"
        context={mobileContext}
        hasBorder={false}
        {...linkDocsContentExample}
      />
    </div>
  ),
  'horizontal, swipe list': (
    <div className="container grid grid-cols-12">
      <LinkDocs
        className="col-span-12"
        context={mobileContext}
        {...linkDocsContentExample}
        orientation="horizontal"
      />
    </div>
  ),
};
