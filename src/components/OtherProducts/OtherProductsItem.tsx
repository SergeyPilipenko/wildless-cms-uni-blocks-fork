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
  ({ label, blocks, context, dataTheme, isUnfolded }) => {
    const foldableBlocks = renderBlocksList({
      context,
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
            containerClasses="grid grid-cols-12 gap-1 border-box"
            render={(children) => <Wrapper>{children}</Wrapper>}
          />
        ) : null}
      </div>
    );
  },
);

const Wrapper = JSX(({ children }) => {
  return <div className="box-border">{children}</div>;
});
