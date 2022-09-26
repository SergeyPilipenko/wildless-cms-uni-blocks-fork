import { JSX } from '@redneckz/uni-jsx';
import { renderBlocksList } from '../../ui-kit/BlocksList/renderBlocksList';
import type { AccordionItemProps } from './AccordionItem';

export const AccordionItemInner = JSX<AccordionItemProps>(({ blocks, context }) => {
  return (
    <div className="flex flex-wrap transition-all duration-300 max-h-0 overflow-hidden group-last:last:pb-0">
      {renderBlocksList({ context, blocks, className: '!px-0' })}
    </div>
  );
});
