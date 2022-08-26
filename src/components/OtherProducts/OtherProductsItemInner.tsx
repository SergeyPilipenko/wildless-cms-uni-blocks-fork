import { JSX } from '@redneckz/uni-jsx';
import type { BlockItemProps } from './OtherProductsItem';
import { renderBlocksList } from '../../ui-kit/BlocksList/renderBlocksList';

export const OtherProductsItemInner = JSX<BlockItemProps>(({ blocks, columns = 1, context }) => {
  const className = 'box-border p-5';
  return (
    <div className="transition-all duration-300 max-h-0 overflow-hidden">
      <div className={`box-border w-full p-9 ${columns > 1 ? 'flex flex-wrap' : ''}`}>
        {renderBlocksList({ context, className, columns, blocks })}
      </div>
    </div>
  );
});
