import { mobileContext } from '../../setup-fixture';
import { linkDocsContentExample } from './linkDocsContentExample';
import { LinkDocs } from './LinkDocs';

export default {
  'vertical (default)': (
    <div className="container grid grid-cols-12">
      <LinkDocs
        className="col-span-12"
        context={mobileContext}
        subtitle="Откройте мультивалютный вклад, чтобы распределить свои вложения"
        {...linkDocsContentExample}
      />
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
        listMode={'horizontal'}
      />
    </div>
  ),
};
