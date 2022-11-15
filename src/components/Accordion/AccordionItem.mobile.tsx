import { JSX } from '@redneckz/uni-jsx';
import { UniBlockProps } from '../../model/ContentPageDef';
import { renderBlocksList } from '../../ui-kit/BlocksList/renderBlocksList';
import { Foldable } from '../../ui-kit/Foldable/Foldable';
import type { FoldButtonProps } from '../../ui-kit/Foldable/FoldButtonProps';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import { Img } from '../../ui-kit/Img/Img';
import type { AccordionItemCommonProps } from './AccordionContent';

export interface AccordionItemProps extends AccordionItemCommonProps, UniBlockProps {}

const icons: IconName[] = ['PlusIcon', 'MinusIcon'];

export const AccordionItem = JSX<AccordionItemProps>(
  ({ label = '', labelIcon, blocks, bordered, context }) => {
    const foldableBlocks = blocks ? renderBlocksList({ context, blocks, className: '!px-0' }) : [];

    return (
      <li className={`${borderedLiClass(bordered)} border-solid border-main-divider`}>
        <Foldable
          hiddenBlocksNum={foldableBlocks.length}
          blocks={foldableBlocks}
          isFoldButtonOnTop
          containerClassName="flex flex-wrap group-last:last:pb-0"
          renderFoldButton={(props) => (
            <FoldButton
              className={bordered ? '' : 'py-[14px] px-0'}
              icon={icons[Number(props.isUnfolded)]}
              label={label}
              primaryIcon={labelIcon}
              hasContent={Boolean(blocks?.length)}
              onClick={props.onToggle}
            />
          )}
        />
      </li>
    );
  },
);

const FoldButton = JSX<FoldButtonProps>(
  ({ className, hasContent, icon, label, primaryIcon, onClick }) => (
    <button
      className={`border-none bg-transparent flex justify-between text-left w-full font-sans text-primary-text
  ${className}
  ${hasContent ? 'group cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <span
        className={`text-m-title-xs font-medium pr-2.5 flex ${
          hasContent ? 'group-hover:text-primary-main' : ''
        }`}
      >
        {primaryIcon ? (
          <Img image={primaryIcon} className="mr-3 flex-shrink-0" width="24" height="24" asSVG />
        ) : null}
        {label}
      </span>
      {hasContent ? (
        <Img className="flex-shrink-0" image={icon} width="24" height="24" asSVG />
      ) : null}
    </button>
  ),
);

function borderedLiClass(bordered?: boolean) {
  return bordered ? 'border p-4 rounded mb-4' : 'border-0 border-b last:border-b-0';
}
