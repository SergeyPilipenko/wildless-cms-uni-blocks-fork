import { context } from '../../react/setup-fixture';
import { HEADLINE } from '../Headline/Headline.fixture';
import { linkDocsContentExample } from '../LinkDocs/linkDocsContentExample';
import { PICTURE_TEXT } from '../PictureText/PictureText.fixture';
import { TEXT_BLOCK } from '../TextBlock/TextBlock.fixture';
import type { AccordionProps } from './Accordion';
import { Accordion } from './Accordion';
import type {
  HeadlineBlockListDef,
  LinkDocsBlockListDef,
  PictureTextBlockListDef,
  TextBlockBlockListDef,
} from '../../ui-kit/BlocksList/BlocksListProps';

const TEXT_BLOCK_ACCORDION_BLOCK: TextBlockBlockListDef = {
  blockListType: 'TextBlock',
  ...TEXT_BLOCK,
};

const HEADLINE_ACCORDION_BLOCK: HeadlineBlockListDef = {
  blockListType: 'Headline',
  ...HEADLINE,
};

const PICTURE_TEXT_ACCORDION_BLOCK: PictureTextBlockListDef = {
  blockListType: 'PictureText',
  ...PICTURE_TEXT,
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
      blocks: [TEXT_BLOCK_ACCORDION_BLOCK, TEXT_BLOCK_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 2',
      labelIcon: {
        icon: 'CardIcon',
      },
      blocks: [PICTURE_TEXT_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 3',
      blocks: [HEADLINE_ACCORDION_BLOCK],
    },
    {
      label: 'Accordion label 4',
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
