import '../../react/setup-fixture';
import { LinkDocs } from './LinkDocs';
import { linkDocsContentExample } from './linkDocsContentExample';

export default {
  'two columns (default)': (
    <div className="container grid grid-cols-12">
      <LinkDocs className="col-span-12" {...linkDocsContentExample} />
    </div>
  ),
  'one column': (
    <div className="container grid grid-cols-12">
      <LinkDocs className="col-span-12" {...linkDocsContentExample} columnsMode="single" />
    </div>
  ),
  'custom icon': (
    <div className="container grid grid-cols-12">
      <LinkDocs className="col-span-12" {...linkDocsContentExample} icon={{ icon: 'GlassIcon' }} />
    </div>
  ),
  'no icon': (
    <div className="container grid grid-cols-12">
      <LinkDocs className="col-span-12" {...linkDocsContentExample} icon={{ icon: '' }} />
    </div>
  ),
};
