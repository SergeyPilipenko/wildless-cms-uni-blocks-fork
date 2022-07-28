import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Title } from '../../ui-kit/Title/Title';
import type { AccordionContent } from './AccordionContent';
import { AccordionItem } from './AccordionItem';

export interface AccordionProps extends AccordionContent, UniBlockProps {}

export const Accordion = JSX<AccordionProps>(
  ({ title, description, accordionItems, context, className = '', bordered }) => {
    return (
      <section
        className={`py-6 font-sans bg-white text-primary-text ${
          bordered ? 'px-4' : ''
        } ${className}`}
      >
        {title ? (
          <Title className="m-0 mb-2 font-medium text-center" size="M">
            {title}
          </Title>
        ) : null}
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
