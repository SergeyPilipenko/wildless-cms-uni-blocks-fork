import { JSX } from '@redneckz/uni-jsx';
import { AlignType } from '../../model/AlignType';
import type { UniBlockProps } from '../../model/ContentPageDef';
import { renderBlocksList } from '../../ui-kit/BlocksList/renderBlocksList';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import type { AccordionContent } from './AccordionContent';
import { AccordionItem } from './AccordionItem';
import { AccordionItemsList } from './AccordionItemsList';

const ALIGN_TITLE: Record<AlignType, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export interface AccordionProps extends AccordionContent, UniBlockProps {}

export const Accordion = JSX<AccordionProps>(
  ({
    title,
    description,
    accordionItems,
    context,
    className = '',
    accordionAlignTitle = 'center',
    ...rest
  }) => {
    return (
      <BlockWrapper
        context={context}
        className={`p-[50px] mb-1 last:mb-0 font-sans bg-white text-primary-text ${className}`}
        {...rest}
      >
        {title ? (
          <Heading
            headingType="h3"
            as="h2"
            className={`mb-2.5 ${ALIGN_TITLE[accordionAlignTitle]}`}
            title={title}
          />
        ) : null}
        {description ? <div className="mb-2.5 text-l">{description}</div> : null}
        {accordionItems?.length ? (
          <AccordionItemsList>
            {accordionItems.map((item, i) => (
              <AccordionItem
                key={`AccordionItem${i}`}
                context={context}
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
