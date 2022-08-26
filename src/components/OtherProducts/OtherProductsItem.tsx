import { JSX } from '@redneckz/uni-jsx';
import { useActiveHandler } from './utils/useActiveHandler';
import type { UniBlockProps } from '../../types';
import type { blockItemCommonProps } from './OtherProductsContent';
import { Icon } from '../../ui-kit/Icon/Icon';
import { OtherProductsItemInner } from './OtherProductsItemInner';

export interface BlockItemProps extends blockItemCommonProps, UniBlockProps {}

export const OtherProductsItem = JSX<BlockItemProps>(({ label, blocks, columns, context }) => {
  const { hasContent, icon, handleToggle, isActive } = useActiveHandler({
    context,
    blocks,
  });

  return (
    <div className="border-0 border-b border-solid border-main-divider">
      {hasContent ? (
        <OtherProductsItemInner
          columns={columns}
          blocks={blocks}
          context={context}
          isActive={isActive}
        />
      ) : null}
      <button
        className={`border-none bg-primary-main px-0 py-[25px] text-center w-full font-sans text-white text-base
        ${hasContent ? 'group cursor-pointer' : ''}`}
        onClick={handleToggle}
      >
        <span className="pr-3">{isActive ? 'Скрыть' : label}</span>
        {hasContent ? <Icon name={icon} width="20" height="20" asSVG /> : null}
      </button>
    </div>
  );
});
