import { DEFAULT_SLOT_NAME } from '../../model/BlockDecorator';
import type { BlockDef, ContentPageDef } from '../../model/ContentPageDef';
import '../../react/setup-fixture';
import { AccordionItem } from '../AccordionItem/AccordionItem';
import { Headline } from '../Headline/Headline';
import { HEADLINE } from '../Headline/Headline.fixture';
import { LinkDocs } from '../LinkDocs/LinkDocs';
import { linkDocsContentExample } from '../LinkDocs/linkDocsContentExample';
import { TextBlock } from '../TextBlock/TextBlock';
import { TEXT_BLOCK } from '../TextBlock/TextBlock.fixture';
import type { AccordionProps } from './Accordion';
import { Accordion } from './Accordion';

const page = {} as ContentPageDef;

const TEXT_BLOCK_ACCORDION_BLOCK = <TextBlock {...TEXT_BLOCK} />;

const HEADLINE_ACCORDION_BLOCK = <Headline {...HEADLINE} />;

const LINK_DOCS_ACCORDION_BLOCK = <LinkDocs {...linkDocsContentExample} title="" />;

const ACCORDION_BLOCK_DEF: BlockDef = {
  type: 'Accordion',
  content: {
    title: 'Accordion title',
    description: 'Accordion description 2',
    bordered: true,
  } as AccordionProps,
};

export const ACCORDION_ITEM = (
  <AccordionItem
    ancestors={[
      [page, DEFAULT_SLOT_NAME],
      [ACCORDION_BLOCK_DEF, DEFAULT_SLOT_NAME],
    ]}
    label="Accordion label 1"
    labelIcon={{ icon: 'CardIcon' }}
  >
    {[TEXT_BLOCK_ACCORDION_BLOCK, TEXT_BLOCK_ACCORDION_BLOCK]}
  </AccordionItem>
);

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Accordion className="col-span-12" {...ACCORDION_BLOCK_DEF.content}>
        {ACCORDION_ITEM}
        <AccordionItem
          ancestors={[
            [page, DEFAULT_SLOT_NAME],
            [ACCORDION_BLOCK_DEF, DEFAULT_SLOT_NAME],
          ]}
          label="Accordion label 2"
        >
          {[HEADLINE_ACCORDION_BLOCK]}
        </AccordionItem>
        <AccordionItem
          ancestors={[
            [page, DEFAULT_SLOT_NAME],
            [ACCORDION_BLOCK_DEF, DEFAULT_SLOT_NAME],
          ]}
          label="Accordion label 3"
        >
          {[LINK_DOCS_ACCORDION_BLOCK]}
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
