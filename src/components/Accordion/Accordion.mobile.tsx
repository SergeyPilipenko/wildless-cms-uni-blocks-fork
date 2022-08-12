import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import type { AccordionContent } from './AccordionContent';
import { AccordionItem } from './AccordionItem';

export interface AccordionProps extends AccordionContent, UniBlockProps {}

export const Accordion = JSX<AccordionProps>(
  ({ title, description, accordionItems, context, className = '', bordered }) => {
    return (
      <section
        className={`py-6 px-4 font-sans bg-white text-primary-text ${className}`}
      >
        {title ? <Heading headingType="h3" className="mb-2 text-center" title={title} /> : null}
        {description ? <div className="mb-5 text-m-md text-center">{description}</div> : null}
        {accordionItems?.length ? (
          <ul className="list-none m-0 p-0">
            {accordionItems.map((item, i) => (
              <AccordionItem
                key={`AccordionItem${i}`}
                {...item}
                context={context}
                bordered={bordered}
              />
            ))}
          </ul>
        ) : null}
      </section>
    );
  },
);
