import { JSX } from '@redneckz/uni-jsx';
import type { JSXBlock, UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import type { AccordionContent } from './AccordionContent';
import { AccordionItemsList } from './AccordionItemsList';

export interface AccordionProps extends AccordionContent, UniBlockProps {}

export const Accordion: JSXBlock<AccordionProps> = JSX<AccordionProps>(
  ({ title, description, context, className = '', children, ...rest }) => (
    <BlockWrapper
      context={context}
      className={`py-6 px-4 font-sans bg-white text-primary-text ${className}`}
      {...rest}
    >
      {title ? <Heading headingType="h3" className="mb-2 text-center" title={title} /> : null}
      {description ? <div className="mb-5 text-m-light text-center">{description}</div> : null}
      <AccordionItemsList>{children}</AccordionItemsList>
    </BlockWrapper>
  ),
);

Accordion.childrenTypes = ['AccordionItem'];
