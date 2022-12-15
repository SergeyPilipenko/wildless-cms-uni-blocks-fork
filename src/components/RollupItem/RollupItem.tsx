import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { JSXBlock } from '../../model/JSXBlock';
import { DefaultFoldButton } from '../../ui-kit/Foldable/DefaultFoldButton';
import { Foldable } from '../../ui-kit/Foldable/Foldable';
import { FoldablePartProps } from '../../ui-kit/Foldable/FoldablePartProps';
import { FoldableSection } from '../../ui-kit/Foldable/FoldableSection';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import { Img } from '../../ui-kit/Img/Img';
import { getIconWithVersion } from '../../utils/getIconWithVersion';
import type { RollupItemProps } from './RollupItemProps';

interface RollupFoldablePartProps extends FoldablePartProps {
  label?: string;
  version?: BlockVersion;
}

interface FoldButtonProps {
  label?: string;
  icon: IconName;
  onClick?: () => void;
  onToggle?: () => void;
  isUnfolded?: boolean;
}

export const RollupItem: JSXBlock<RollupItemProps> = JSX<RollupItemProps>(
  ({
    className = '',
    label = 'Развернуть',
    isExpanded,
    isFoldButtonOnTop = true,
    version = 'primary',
    children,
  }) => (
    <div className={`border-b border-solid border-main-divider w-full ${className}`}>
      <Foldable
        isFoldButtonOnTop={isFoldButtonOnTop}
        unfoldedByDefault={isExpanded}
        renderFoldableSection={({ isUnfolded }) => (
          <div className="box-border">
            <FoldableSection
              className={`grid grid-cols-12 gap-1 border-box`}
              isUnfolded={isUnfolded}
            >
              {children}
            </FoldableSection>
          </div>
        )}
        renderFoldButton={({ isUnfolded, onToggle }) =>
          renderFoldButton({ isUnfolded, onToggle, label, version })
        }
      />
    </div>
  ),
);

RollupItem.childrenTypes = [];

const renderFoldButton = ({ isUnfolded, onToggle, label, version }: RollupFoldablePartProps) => {
  const icons: IconName[] = ['PlusIcon', 'MinusIcon'];
  const labels = label ? [label, label] : ['Развернуть', 'Скрыть'];

  return version === 'primary' ? (
    <FoldButton
      icon={icons[Number(isUnfolded)]}
      label={labels[Number(isUnfolded)]}
      onClick={onToggle}
    />
  ) : (
    <DefaultFoldButton
      icon={icons[Number(isUnfolded)]}
      label={labels[Number(isUnfolded)]}
      onClick={onToggle}
    />
  );
};

const FoldButton = JSX<FoldButtonProps>(({ label, icon, onClick }) => (
  <button
    className="border-none bg-transparent px-9 pt-5 pb-3.5 flex justify-between text-left w-full font-sans text-h6 group cursor-pointer"
    onClick={onClick}
  >
    <span className="text-xl font-medium pr-2.5">{label}</span>
    {icon ? <Img image={getIconWithVersion({ icon })} width="24" height="24" asSVG /> : null}
  </button>
));
