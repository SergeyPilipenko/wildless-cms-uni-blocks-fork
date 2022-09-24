import { JSX } from '@redneckz/uni-jsx';
import type { VNode } from '../../model/VNode';
import type { ColorPalette, UniBlockProps } from '../../types';
import { renderBlocksList } from '../../ui-kit/BlocksList/renderBlocksList';
import { Foldable } from '../../ui-kit/Foldable/Foldable';
import type { BlockItemCommonProps } from './OtherProductsContent';

export interface BlockItemProps extends BlockItemCommonProps, UniBlockProps {
  dataTheme?: ColorPalette;
}

export const OtherProductsItem = JSX<BlockItemProps>(
  ({ label, blocks, columns = 1, context, dataTheme, isUnfolded }) => {
    const foldableBlocks = renderBlocksList({
      context,
      className: 'box-border p-5',
      columns,
      blocks,
    }) as VNode[];

    return (
      <div className="border-0 border-b border-solid border-main-divider">
        {blocks?.length ? (
          <Foldable
            foldButtonDataTheme={dataTheme}
            hiddenBlocksNum={blocks?.length}
            blocks={foldableBlocks}
            isUnfolded={isUnfolded}
            context={context}
            foldButtonLabel={label}
            render={(children, isActive) => (
              <Wrapper columns={columns} isActive={isActive}>
                {children}
              </Wrapper>
            )}
          />
        ) : null}
      </div>
    );
  },
);

const Wrapper = JSX<{ columns: number; isActive: boolean }>(({ columns, children, isActive }) => {
  return (
    <div
      className={`box-border w-full ${isActive ? 'p-9' : ''} ${
        columns > 1 ? 'flex flex-wrap' : ''
      }`}
    >
      {children}
    </div>
  );
});
