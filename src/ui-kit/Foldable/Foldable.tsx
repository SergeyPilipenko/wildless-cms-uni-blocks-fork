import { JSX } from '@redneckz/uni-jsx';
import { useRef, useState } from '@redneckz/uni-jsx/lib/hooks';
import type { VNode } from '../../model/VNode';
import { clamp } from '../../utils/clamp';
import type { IconName } from '../Icon/IconProps';
import { DefaultButton } from './DefaultButton';

interface RenderFoldButtonProps {
  isUnfolded: boolean;
  onToggle: () => void;
}
export interface FoldableProps {
  blocks?: VNode[];
  hiddenBlocksNum?: number;
  unfoldedByDefault?: boolean;
  isFoldButtonOnTop?: boolean;
  containerClassName?: string;
  blockWrapper?: (children: VNode) => VNode;
  renderFoldButton?: (props: RenderFoldButtonProps) => VNode;
}

export const Foldable = JSX<FoldableProps>(
  ({
    blocks = [],
    hiddenBlocksNum = 0,
    isFoldButtonOnTop = false,
    unfoldedByDefault = false,
    containerClassName = '',
    blockWrapper = (_) => _,
    renderFoldButton = renderDefaultFoldButton,
  }) => {
    const [isUnfolded, setIsUnfolded] = useState(unfoldedByDefault);
    const blocksToHide = clamp(hiddenBlocksNum, 0, blocks?.length);
    const visibleBlocks = blocks.slice(0, blocks.length - blocksToHide);
    const hiddenBlocks = blocksToHide > 0 ? blocks.slice(-blocksToHide) : [];
    const containerRef = useRef<HTMLDivElement | null>(null);

    const onToggle = () => {
      setIsUnfolded(!isUnfolded);
      if (containerRef.current) {
        containerRef.current.style.maxHeight = isUnfolded
          ? ''
          : `${containerRef.current.scrollHeight}px`;
      }
    };

    const buttonNode = hiddenBlocksNum ? renderFoldButton({ isUnfolded, onToggle }) : null;
    const blocksNode = blockWrapper(
      <div>
        {visibleBlocks}
        <div
          ref={containerRef}
          className={`transition-max-h duration-300 overflow-hidden max-h-0 ${containerClassName}`}
        >
          {hiddenBlocks}
        </div>
      </div>,
    );

    return (
      <div>
        {isFoldButtonOnTop ? (
          <div>
            {buttonNode}
            {blocksNode}
          </div>
        ) : (
          <div>
            {blocksNode}
            {buttonNode}
          </div>
        )}
      </div>
    );
  },
);

const renderDefaultFoldButton = (props: RenderFoldButtonProps) => {
  const labels = ['Развернуть', 'Скрыть'];
  const icons: IconName[] = ['ArrowDownIcon', 'ArrowUpIcon'];

  return (
    <DefaultButton
      icon={icons[Number(props.isUnfolded)]}
      label={labels[Number(props.isUnfolded)]}
      onClick={props.onToggle}
    />
  );
};
