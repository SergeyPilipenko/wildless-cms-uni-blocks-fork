import { context } from '../../react/setup-fixture';
import type {
  HeadlineBlockListDef,
  LinkDocsBlockListDef,
  TextBlockBlockListDef,
} from '../../ui-kit/BlocksList/BlocksListProps';
import { HEADLINE } from '../Headline/Headline.fixture';
import { linkDocsContentExample } from '../LinkDocs/linkDocsContentExample';
import { TEXT_BLOCK } from '../TextBlock/TextBlock.fixture';
import type { AccordionProps } from './Accordion';
import { Accordion } from './Accordion';

const TEXT_BLOCK_ACCORDION_BLOCK: TextBlockBlockListDef = {
  blockListType: 'TextBlock',
  ...TEXT_BLOCK,
};

const HEADLINE_ACCORDION_BLOCK: HeadlineBlockListDef = {
  blockListType: 'Headline',
  ...HEADLINE,
};

const LINK_DOCS_ACCORDION_BLOCK: LinkDocsBlockListDef = {
  blockListType: 'LinkDocs',
  ...linkDocsContentExample,
  title: '',
};

const propsTextBlock: AccordionProps = {
  title: 'Accordion title',
  description: 'Accordion description 2',
  bordered: true,
  context,
  accordionItems: [
    {
      label: 'Accordion label 1',
      labelIcon: {
        icon: 'CardIcon',
      },
      blocks: [TEXT_BLOCK_ACCORDION_BLOCK, TEXT_BLOCK_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 2',
      blocks: [HEADLINE_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 3',
      blocks: [LINK_DOCS_ACCORDION_BLOCK],
    },
  ],
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Accordion className="col-span-12" {...propsTextBlock} />
    </div>
  ),
};
