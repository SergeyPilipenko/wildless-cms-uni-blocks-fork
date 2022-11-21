import { JSX } from '@redneckz/uni-jsx';
import { getParentBlockContent } from '../../model/getParentBlockContent';
import type { JSXBlock, UniBlockProps } from '../../model/JSXBlock';
import { DefaultFoldButton } from '../../ui-kit/Foldable/DefaultFoldButton';
import { Foldable } from '../../ui-kit/Foldable/Foldable';
import { FoldableSection } from '../../ui-kit/Foldable/FoldableSection';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import type { OtherProductsContent } from '../OtherProducts/OtherProductsContent';
import type { OtherProductsItemContent } from './OtherProductsItemContent';

export interface OtherProductsItemProps extends OtherProductsItemContent, UniBlockProps {}

const icons: IconName[] = ['ArrowDownIcon', 'ArrowUpIcon'];

export const OtherProductsItem: JSXBlock<OtherProductsItemProps> = JSX<OtherProductsItemProps>(
  ({ className, page, ancestors, label = '', isUnfolded: unfoldedByDefault, children }) => {
    const { colorPalette } = getParentBlockContent(ancestors, {} as OtherProductsContent);

    return (
      <div className={`border-0 border-b border-solid border-main-divider ${className}`}>
        <Foldable
          unfoldedByDefault={unfoldedByDefault}
          renderFoldableSection={({ isUnfolded }) => (
            <div className="box-border">
              <FoldableSection
                className="grid grid-cols-12 gap-1 border-box"
                isUnfolded={isUnfolded}
              >
                {children}
              </FoldableSection>
            </div>
          )}
          renderFoldButton={({ isUnfolded, onToggle }) => (
            <DefaultFoldButton
              label={label}
              icon={icons[Number(isUnfolded)]}
              dataTheme={page?.colorPalette || colorPalette}
              onClick={onToggle}
            />
          )}
        />
      </div>
    );
  },
);

OtherProductsItem.childrenTypes = []; // All types of blocks are suitable
