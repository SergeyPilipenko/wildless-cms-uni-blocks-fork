import { JSX } from '@redneckz/uni-jsx';
import type { ColorPalette, UniBlockProps } from '../../model/ContentPageDef';
import type { VNode } from '../../model/VNode';
import { renderBlocksList } from '../../ui-kit/BlocksList/renderBlocksList';
import { DefaultButton } from '../../ui-kit/Foldable/DefaultButton';
import { Foldable } from '../../ui-kit/Foldable/Foldable';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import type { BlockItemCommonProps } from './OtherProductsContent';

export interface BlockItemProps extends BlockItemCommonProps, UniBlockProps {
  dataTheme?: ColorPalette;
}

const icons: IconName[] = ['ArrowDownIcon', 'ArrowUpIcon'];

export const OtherProductsItem = JSX<BlockItemProps>(
  ({ label = '', blocks, context, dataTheme, isUnfolded }) => {
    const foldableBlocks = renderBlocksList({
      context,
      blocks,
    }) as VNode[];

    return (
      <div className="˝border-0 border-b border-solid border-main-divider">
        {blocks?.length ? (
          <Foldable
            blocks={foldableBlocks}
            hiddenBlocksNum={blocks?.length}
            unfoldedByDefault={isUnfolded}
            containerClassName="grid grid-cols-12 gap-1 border-box"
            blockWrapper={(children) => <Wrapper>{children}</Wrapper>}
            renderFoldButton={(props) => (
              <DefaultButton
                icon={icons[Number(props.isUnfolded)]}
                label={label}
                dataTheme={dataTheme}
                onClick={props.onToggle}
              />
            )}
          />
        ) : null}
      </div>
    );
  },
);

const Wrapper = JSX(({ children }) => {
  return <div className="box-border">{children}</div>;
});
