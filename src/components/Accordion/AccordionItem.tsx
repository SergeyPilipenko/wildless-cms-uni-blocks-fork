import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Icon } from '../../ui-kit/Icon/Icon';
import type { AccordionItemCommonProps } from './AccordionContent';
import { AccordionItemInner } from './AccordionItemInner';
import { useActiveHandler } from './useActiveHandler';

export interface AccordionItemProps extends AccordionItemCommonProps, UniBlockProps {}

export const AccordionItem = JSX<AccordionItemProps>(({ label, isExpanded, blocks, context }) => {
  const { isActive, hasContent, icon, handleToggle } = useActiveHandler({
    context,
    blocks,
    initialState: isExpanded,
  });

  return (
    <li className="border-0 border-b border-solid border-main-divider last:border-b-0">
      <button
        className={`border-none bg-transparent px-0 py-5 flex justify-between text-left w-full font-sans
            ${hasContent ? 'group cursor-pointer' : ''}
          `}
        onClick={handleToggle}
      >
        <span className={`text-xl pr-2.5 font-medium`}>{label}</span>
        {hasContent ? <Icon name={icon} width="24" height="24" asSVG /> : null}
      </button>
      {hasContent ? (
        <AccordionItemInner isExpanded={isActive} blocks={blocks} context={context} />
      ) : null}
    </li>
  );
});
