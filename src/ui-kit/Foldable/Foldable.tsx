import { JSX } from '@redneckz/uni-jsx';
import { useCallback, useState } from '@redneckz/uni-jsx/lib/hooks';
import type { VNode } from '../../model/VNode';
import type { FoldablePartProps } from './FoldablePartProps';

export interface FoldableProps {
  unfoldedByDefault?: boolean;
  isFoldButtonOnTop?: boolean;
  renderFoldableSection: (props: FoldablePartProps) => VNode;
  renderFoldButton?: ((props: FoldablePartProps) => VNode) | null;
}

export const Foldable = JSX<FoldableProps>(
  ({
    isFoldButtonOnTop = false,
    unfoldedByDefault = false,
    renderFoldableSection,
    renderFoldButton,
  }) => {
    const [isUnfolded, setIsUnfolded] = useState(unfoldedByDefault);

    const onToggle = useCallback(() => {
      setIsUnfolded((_) => !_);
    }, []);

    const sectionNode = renderFoldableSection({ isUnfolded, onToggle });
    const buttonNode = renderFoldButton ? renderFoldButton({ isUnfolded, onToggle }) : null;

    return isFoldButtonOnTop ? (
      <div>
        {buttonNode}
        {sectionNode}
      </div>
    ) : (
      <div>
        {sectionNode}
        {buttonNode}
      </div>
    );
  },
);
