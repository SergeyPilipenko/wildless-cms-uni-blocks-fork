import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Icon } from '../../ui-kit/Icon/Icon';
import type { AccordionItemCommonProps } from './AccordionContent';
import { AccordionItemInner } from './AccordionItemInner';
import { useActiveHandler } from './useActiveHandler';

export interface AccordionItemProps extends AccordionItemCommonProps, UniBlockProps {}

export const AccordionItem = JSX<AccordionItemProps>(({ label, blocks, bordered, context }) => {
  const { hasContent, icon, handleToggle } = useActiveHandler({
    context,
    blocks,
  });

  return (
    <li
      className={`${
        bordered ? 'border p-4 rounded mb-4' : 'border-0 border-b last:border-b-0'
      } border-solid border-main-divider`}
    >
      <button
        className={`border-none bg-transparent flex justify-between text-left w-full font-sans text-primary-text
          ${bordered ? '' : 'py-[14px] px-0'}
          ${hasContent ? 'group cursor-pointer' : ''}`}
        onClick={handleToggle}
      >
        <span
          className={`text-m-title-xs pr-2.5 font-medium ${
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
