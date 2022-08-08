import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import type { AccordionContent } from './AccordionContent';
import { AccordionItem } from './AccordionItem';

export interface AccordionProps extends AccordionContent, UniBlockProps {}

export const Accordion = JSX<AccordionProps>(({ title, accordionItems, context, className }) => {
  return (
    <section className={`p-[50px] font-sans bg-white text-primary-text ${className || ''}`}>
      {title ? <Heading headingType="h4" className="mb-2.5" title={title} /> : null}
      {accordionItems?.length ? (
        <ul className="list-none m-0 p-0">
          {accordionItems.map((item, i) => (
            <AccordionItem key={`AccordionItem${i}`} {...item} context={context} />
          ))}
        </ul>
      ) : null}
    </section>
  );
});
