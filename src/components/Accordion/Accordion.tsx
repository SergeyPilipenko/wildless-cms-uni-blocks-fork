import { JSX } from '@redneckz/uni-jsx';
import { AlignText } from '../../model/AlignText';
import type { JSXBlock, UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import type { AccordionContent } from './AccordionContent';
import { AccordionItemsList } from './AccordionItemsList';

export interface AccordionProps extends AccordionContent, UniBlockProps {}

export const Accordion: JSXBlock<AccordionProps> = JSX<AccordionProps>(
  ({ className = '', title, accordionAlignTitle = 'center', description, children, ...rest }) => (
    <BlockWrapper
      className={`p-[50px] mb-1 last:mb-0 font-sans bg-white text-primary-text ${className}`}
      {...rest}
    >
      {title ? (
        <Heading
          headingType="h3"
          as="h2"
          className={`mb-2.5 ${AlignText[accordionAlignTitle]}`}
          title={title}
        />
      ) : null}
      {description ? <div className="mb-2.5 text-l">{description}</div> : null}
      <AccordionItemsList>{children}</AccordionItemsList>
    </BlockWrapper>
  ),
);

Accordion.childrenTypes = ['AccordionItem'];
