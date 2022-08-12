import { mobileContext } from '../../setup-fixture';
import { linkDocsContentExample } from './linkListContentExample';
import { LinkList } from './LinkList';

export default (
  <div className="container grid grid-cols-12">
    <LinkList
      className="col-span-12"
      context={mobileContext}
      {...linkDocsContentExample}
    />
  </div>
);
