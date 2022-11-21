import { JSX } from '@redneckz/uni-jsx';
import type { AlignType } from '../../model/AlignType';
import type { JSXBlock, UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import type { AccordionContent } from './AccordionContent';
import { AccordionItemsList } from './AccordionItemsList';

const ALIGN_TITLE: Record<AlignType, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export interface AccordionProps extends AccordionContent, UniBlockProps {}

export const Accordion: JSXBlock<AccordionProps> = JSX<AccordionProps>(
  ({
    className = '',
    context,
    title,
    accordionAlignTitle = 'center',
    description,
    children,
    ...rest
  }) => (
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
      <AccordionItemsList>{children}</AccordionItemsList>
    </BlockWrapper>
  ),
);

Accordion.childrenTypes = ['AccordionItem'];
