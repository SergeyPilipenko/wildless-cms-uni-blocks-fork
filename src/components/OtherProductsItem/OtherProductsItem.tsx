import { JSX } from '@redneckz/uni-jsx';
import { JSXBlock } from '../../model/BlocksRegistry';
import type { UniBlockProps } from '../../model/ContentPageDef';
import { DefaultFoldButton } from '../../ui-kit/Foldable/DefaultFoldButton';
import { Foldable } from '../../ui-kit/Foldable/Foldable';
import { FoldableSection } from '../../ui-kit/Foldable/FoldableSection';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import type { OtherProductsItemContent } from './OtherProductsItemContent';

export interface OtherProductsItemProps extends OtherProductsItemContent, UniBlockProps {}

const icons: IconName[] = ['ArrowDownIcon', 'ArrowUpIcon'];

export const OtherProductsItem = JSX<OtherProductsItemProps>(
  ({ className, label = '', colorPalette, isUnfolded: unfoldedByDefault, children }) => (
    <div className={`border-0 border-b border-solid border-main-divider ${className}`}>
      <Foldable
        unfoldedByDefault={unfoldedByDefault}
        renderFoldableSection={({ isUnfolded }) => (
          <div className="box-border">
            <FoldableSection className="grid grid-cols-12 gap-1 border-box" isUnfolded={isUnfolded}>
              {children}
            </FoldableSection>
          </div>
        )}
        renderFoldButton={({ isUnfolded, onToggle }) => (
          <DefaultFoldButton
            label={label}
            icon={icons[Number(isUnfolded)]}
            dataTheme={colorPalette}
            onClick={onToggle}
          />
        )}
      />
    </div>
  ),
) as JSXBlock<OtherProductsItemProps>;

OtherProductsItem.childrenTypes = []; // All types of blocks are suitable
