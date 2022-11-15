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

export const AccordionItem = JSX<AccordionItemProps>(({ label = '', blocks, context }) => {
  const foldableBlocks = blocks
    ? renderBlocksList({ context, blocks, className: '!p-0 mb-5' })
    : [];

  return (
    <li className="border-0 border-b border-solid border-main-divider last:border-b-0">
      <Foldable
        hiddenBlocksNum={foldableBlocks.length}
        blocks={foldableBlocks}
        isFoldButtonOnTop
        containerClassName="grid grid-cols-12"
        renderFoldButton={(props) => (
          <FoldButton
            icon={icons[Number(props.isUnfolded)]}
            label={label}
            hasContent={Boolean(blocks?.length)}
            onClick={props.onToggle}
          />
        )}
      />
    </li>
  );
});

const FoldButton = JSX<FoldButtonProps>(({ icon, label, hasContent, onClick }) => (
  <button
    className={`border-none bg-transparent px-0 pt-5 pb-3.5 flex justify-between text-left w-full font-sans text-h6 group cursor-pointer ${
      hasContent ? 'group cursor-pointer' : ''
    }`}
    onClick={onClick}
  >
    <span className={`text-xl font-medium pr-2.5`}>{label}</span>
    {hasContent ? (
      <Img image={icon} className="text-primary-main flex-shrink-0" width="24" height="24" asSVG />
    ) : null}
  </button>
));
