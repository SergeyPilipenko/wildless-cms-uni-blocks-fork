import { context } from '../../setup-fixture';
import { HEADLINE } from '../Headline/Headline.fixture';
import { linkDocsContentExample } from '../LinkDocs/linkDocsContentExample';
import { PICTURE_TEXT } from '../PictureText/PictureText.fixture';
import { TEXT_BLOCK } from '../TextBlock/TextBlock.fixture';
import type { AccordionProps } from './Accordion';
import { Accordion } from './Accordion';
import type {
  HeadlineAccordionBlockDef,
  LinkDocsAccordionBlockDef,
  PictureTextAccordionBlockDef,
  TextBlockAccordionBlockDef,
} from './AccordionContent';

const TEXT_BLOCK_ACCORDION_BLOCK: TextBlockAccordionBlockDef = {
  accordionBlockType: 'TextBlock',
  ...TEXT_BLOCK,
};

const HEADLINE_ACCORDION_BLOCK: HeadlineAccordionBlockDef = {
  accordionBlockType: 'Headline',
  ...HEADLINE,
};

const PICTURE_TEXT_ACCORDION_BLOCK: PictureTextAccordionBlockDef = {
  accordionBlockType: 'PictureText',
  ...PICTURE_TEXT,
};

const LINK_DOCS_ACCORDION_BLOCK: LinkDocsAccordionBlockDef = {
  accordionBlockType: 'LinkDocs',
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

export default (
  <div className="container grid grid-cols-12">
    <Accordion className="col-span-12" {...propsTextBlock} />
  </div>
);
