import { JSX } from '@redneckz/uni-jsx';
import { renderBlocksList } from '../../ui-kit/BlocksList/renderBlocksList';
import type { AccordionItemProps } from './AccordionItem';

export const AccordionItemInner = JSX<AccordionItemProps>(({ blocks, context }) => {
  return (
    <div className="grid grid-cols-12 transition-all duration-300 max-h-0 overflow-hidden">
      {renderBlocksList({ context, blocks, className: '!p-0 mb-5' })}
    </div>
  );
});
