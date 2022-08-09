import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Icon } from '../../ui-kit/Icon/Icon';
import type { AccordionItemCommonProps } from './AccordionContent';
import { AccordionItemInner } from './AccordionItemInner';
import { isActiveHandler } from './utils/isActiveHandler';

export interface AccordionItemProps extends AccordionItemCommonProps, UniBlockProps {}

export const AccordionItem = JSX<AccordionItemProps>(({ label, blocks, context }) => {
  const { hasContent, icon, handleToggle } = isActiveHandler({
    context,
    blocks,
  });

  return (
    <li className="border-0 border-b border-solid border-main-divider last:border-b-0">
      <button
        className={`border-none bg-transparent px-0 py-5 flex justify-between text-left w-full font-sans text-primary-text
        ${hasContent ? 'group cursor-pointer' : ''}`}
        onClick={handleToggle}
      >
        <span
          className={`text-xl pr-2.5 font-medium ${
            hasContent ? 'group-hover:text-primary-main' : ''
          }`}
        >
          {label}
        </span>
        {hasContent ? <Icon name={icon} width="24" height="24" asSVG /> : null}
      </button>
      {hasContent ? <AccordionItemInner blocks={blocks} context={context} /> : null}
    </li>
  );
});
