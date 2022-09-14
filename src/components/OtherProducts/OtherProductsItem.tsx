import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Icon } from '../../ui-kit/Icon/Icon';
import type { BlockItemCommonProps } from './OtherProductsContent';
import { OtherProductsItemInner } from './OtherProductsItemInner';
import { useActiveHandler } from './useActiveHandler';
import { ColorPalette } from '../../types';

export interface BlockItemProps extends BlockItemCommonProps, UniBlockProps {
  dataTheme?: ColorPalette;
}

export const OtherProductsItem = JSX<BlockItemProps>(
  ({ label, isExpanded, blocks, columns, dataTheme = null, context }) => {
    const { hasContent, icon, handleToggle, isActive } = useActiveHandler({
      context,
      blocks,
      initialState: isExpanded,
    });

    return (
      <div className="border-0 border-b border-solid border-main-divider">
        {hasContent ? (
          <OtherProductsItemInner
            isExpanded={isActive}
            columns={columns}
            blocks={blocks}
            context={context}
          />
        ) : null}
        <button
          className="border-none bg-primary-main px-0 py-[26px] mb-[1px] w-full font-sans text-white text-base flex justify-center cursor-pointer"
          data-theme={dataTheme}
          onClick={handleToggle}
        >
          <span className="pr-3">{isActive ? 'Скрыть' : label}</span>
          {hasContent ? <Icon name={icon} width="20" height="20" asSVG /> : null}
        </button>
      </div>
    );
  },
);
