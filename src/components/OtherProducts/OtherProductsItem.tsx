import { JSX } from '@redneckz/uni-jsx';
import type { ColorPalette, UniBlockProps } from '../../model/ContentPageDef';
import type { VNode } from '../../model/VNode';
import { renderBlocksList } from '../../ui-kit/BlocksList/renderBlocksList';
import { DefaultFoldButton } from '../../ui-kit/Foldable/DefaultFoldButton';
import { Foldable } from '../../ui-kit/Foldable/Foldable';
import { FoldableSection } from '../../ui-kit/Foldable/FoldableSection';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import type { BlockItemCommonProps } from './OtherProductsContent';

export interface BlockItemProps extends BlockItemCommonProps, UniBlockProps {
  dataTheme?: ColorPalette;
}

const icons: IconName[] = ['ArrowDownIcon', 'ArrowUpIcon'];

export const OtherProductsItem = JSX<BlockItemProps>(
  ({ label = '', blocks, context, dataTheme, isUnfolded: unfoldedByDefault }) => {
    const foldableBlocks = renderBlocksList({
      context,
      blocks,
    }) as VNode[];

    return (
      <div className="˝border-0 border-b border-solid border-main-divider">
        {blocks?.length ? (
          <Foldable
            unfoldedByDefault={unfoldedByDefault}
            renderFoldableSection={({ isUnfolded }) => (
              <div className="box-border">
                <FoldableSection
                  className="grid grid-cols-12 gap-1 border-box"
                  isUnfolded={isUnfolded}
                >
                  {foldableBlocks}
                </FoldableSection>
              </div>
            )}
            renderFoldButton={({ isUnfolded, onToggle }) => (
              <DefaultFoldButton
                label={label}
                icon={icons[Number(isUnfolded)]}
                dataTheme={dataTheme}
                onClick={onToggle}
              />
            )}
          />
        ) : null}
      </div>
    );
  },
);
