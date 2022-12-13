import '../../react/setup-fixture';
import { LinkList } from './LinkList';
import { linkDocsContentExample } from './linkListContentExample';

export default {
  default: (
    <div className="container grid grid-cols-12">
      <LinkList className="col-span-12" {...linkDocsContentExample} />
    </div>
  ),
};
