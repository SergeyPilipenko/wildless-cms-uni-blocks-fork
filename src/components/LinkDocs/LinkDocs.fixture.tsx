import { context } from '../../setup-fixture';
import { linkDocsContentExample } from './linkDocsContentExample';
import { LinkDocs } from './LinkDocs';

export default {
  'two columns (default)': (
    <div className="container grid grid-cols-12">
      <LinkDocs className="col-span-12" context={context} {...linkDocsContentExample} />
    </div>
  ),
  'one column': (
    <div className="container grid grid-cols-12">
      <LinkDocs
        className="col-span-12"
        context={context}
        {...linkDocsContentExample}
        columnsMode="single"
      />
    </div>
  ),
  'custom icon': (
    <div className="container grid grid-cols-12">
      <LinkDocs
        className="col-span-12"
        context={context}
        {...linkDocsContentExample}
        icon={{ icon: 'GlassIcon' }}
      />
    </div>
  ),
  'no icon': (
    <div className="container grid grid-cols-12">
      <LinkDocs
        className="col-span-12"
        context={context}
        {...linkDocsContentExample}
        icon={{ icon: '' }}
      />
    </div>
  ),
};
