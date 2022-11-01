import { JSX } from '@redneckz/uni-jsx';
import { ContentPageContext } from '../../components/ContentPage/ContentPageContext';
import type { VNode } from '../../model/VNode';
import { ColorPalette } from '../../types';
import { clamp } from '../../utils/clamp';
import { Icon } from '../Icon/Icon';
import { foldableBlockClassNames, useActiveHandler } from './useActiveHandler';

export type FoldableBlocks = VNode[];
export type Render = (_: VNode, isActive: boolean) => VNode;

export interface FoldableProps {
  context: ContentPageContext;
  foldButtonLabel?: string;
  hiddenBlocksNum?: number;
  blocks?: FoldableBlocks;
  foldButtonClasses?: string;
  foldButtonDataTheme?: ColorPalette;
  isUnfolded?: boolean;
  render?: Render;
  containerClasses?: string;
}

export interface RenderBlocksParams {
  blocksToHide: number;
  isActive: boolean;
  containerClasses?: string;
}

export const Foldable = JSX<FoldableProps>(
  ({
    blocks = [],
    hiddenBlocksNum = 0,
    foldButtonClasses,
    foldButtonLabel,
    foldButtonDataTheme,
    isUnfolded,
    containerClasses,
    render = (_) => _,
  }) => {
    const blocksToHide = clamp(hiddenBlocksNum, 0, blocks.length);
    const { icon, handleToggle, isActive } = useActiveHandler({
      initialState: isUnfolded,
    });

    const buttonClassName =
      foldButtonClasses ||
      'border-none bg-primary-main hover:bg-primary-hover focus:bg-primary-main active:bg-primary-active px-0 py-5 mb-[1px] w-full font-sans text-white text-h4 flex justify-center cursor-pointer';
    const getFoldButtonLabel = isActive ? 'Скрыть' : foldButtonLabel;

    return blocks ? (
      <div>
        {renderBlocks(blocks, render, { blocksToHide, isActive, containerClasses })}
        {hiddenBlocksNum ? (
          <button
            className={buttonClassName}
            data-theme={foldButtonDataTheme}
            onClick={handleToggle}
          >
            <span className="pr-3">{getFoldButtonLabel}</span>
            {icon ? (
              <Icon
                className="my-auto"
                name={icon}
                iconVersion="white"
                width="20"
                height="20"
                asSVG
              />
            ) : null}
          </button>
        ) : null}
      </div>
    ) : null;
  },
);

const renderBlocks = (
  blocks: FoldableBlocks,
  render: Render,
  { blocksToHide, isActive, containerClasses = '' }: RenderBlocksParams,
) => {
  const visibleBlocks = blocks.slice(0, blocks.length - blocksToHide);
  const hiddenBlocks = blocksToHide > 0 ? blocks.slice(-blocksToHide) : [];

  return render(
    <div>
      {visibleBlocks}
      <div className={`${foldableBlockClassNames} ${containerClasses}`}>{hiddenBlocks}</div>
    </div>,
    isActive,
  );
};
