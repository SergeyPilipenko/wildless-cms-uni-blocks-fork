import { JSX } from '@redneckz/uni-jsx';
import type { AccordionItemProps } from './AccordionItem';
import { renderBlocksList } from '../../ui-kit/BlocksList/renderBlocksList';

export const AccordionItemInner = JSX<AccordionItemProps>(({ blocks, context }) => {
  const className = 'mb-5 last:mb-0 first:mt-2';
  const columns = 1;
  return (
    <div className="transition-all duration-300 max-h-0 overflow-hidden group-last:last:pb-0">
      {renderBlocksList({ context, className, columns, blocks })}
    </div>
  );
});
