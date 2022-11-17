import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/ContentPageDef';
import { renderBlocksList } from '../../ui-kit/BlocksList/renderBlocksList';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import type { AccordionContent } from './AccordionContent';
import { AccordionItem } from './AccordionItem';
import { AccordionItemsList } from './AccordionItemsList';

export interface AccordionProps extends AccordionContent, UniBlockProps {}

export const Accordion = JSX<AccordionProps>(
  ({ title, description, accordionItems, context, className = '', bordered, ...rest }) => {
    return (
      <BlockWrapper
        context={context}
        className={`py-6 px-4 font-sans bg-white text-primary-text ${className}`}
        {...rest}
      >
        {title ? <Heading headingType="h3" className="mb-2 text-center" title={title} /> : null}
        {description ? <div className="mb-5 text-m-light text-center">{description}</div> : null}
        {accordionItems?.length ? (
          <AccordionItemsList>
            {accordionItems.map((item, i) => (
              <AccordionItem
                key={`AccordionItem_${i}`}
                context={context}
                bordered={bordered}
                hasContent={Boolean(item.blocks?.length)}
                {...item}
              >
                {renderBlocksList({ blocks: item.blocks, context, className: '!p-0 mb-5' })}
              </AccordionItem>
            ))}
          </AccordionItemsList>
        ) : null}
      </BlockWrapper>
    );
  },
);
