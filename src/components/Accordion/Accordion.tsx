import { JSX } from '@redneckz/uni-jsx';
import { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import type { AccordionContent } from './AccordionContent';
import { AccordionItem } from './AccordionItem';

export interface AccordionProps extends AccordionContent, UniBlockProps {}

const accordionStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

export const Accordion = JSX<AccordionProps>(
  ({ title, accordionItems, context, className = '', version = 'primary' }) => {
    return (
      <section className={`p-[50px] font-sans ${className} ${accordionStyleMap[version]}`}>
        {title ? <Heading headingType="h4" className="mb-2.5" title={title} /> : null}
        {accordionItems?.length ? (
          <ul className="list-none m-0 p-0">
            {accordionItems.map((item, i) => (
              <AccordionItem
                key={`AccordionItem${i}`}
                {...item}
                version={version}
                context={context}
              />
            ))}
          </ul>
        ) : null}
      </section>
    );
  },
);
