import { JSX } from '@redneckz/uni-jsx';
import type { JSXBlock } from '../../model/JSXBlock';
import { Foldable } from '../../ui-kit/Foldable/Foldable';
import { FoldableSection } from '../../ui-kit/Foldable/FoldableSection';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import { Img } from '../../ui-kit/Img/Img';
import type { AccordionItemProps } from './AccordionItemProps';

const icons: IconName[] = ['PlusIcon', 'MinusIcon'];

export const AccordionItem: JSXBlock<AccordionItemProps> = JSX<AccordionItemProps>(
  ({ className = '', label = '', isExpanded, children }) => (
    <li
      className={`border-0 border-b border-solid border-main-divider last:border-b-0 ${className}`}
    >
      <Foldable
        isFoldButtonOnTop={true}
        unfoldedByDefault={isExpanded}
        renderFoldableSection={({ isUnfolded }) => (
          <FoldableSection className="grid grid-cols-12 gap-5 [&>*]:p-0" isUnfolded={isUnfolded}>
            {children}
          </FoldableSection>
        )}
        renderFoldButton={({ isUnfolded, onToggle }) => (
          <FoldButton label={label} icon={icons[Number(isUnfolded)]} onClick={onToggle} />
        )}
      />
    </li>
  ),
);

AccordionItem.childrenTypes = [];

interface FoldButtonProps {
  label: string;
  icon: IconName;
  onClick?: () => void;
}

const FoldButton = JSX<FoldButtonProps>(({ label, icon, onClick }) => (
  <button
    className="border-none bg-transparent px-0 pt-5 pb-3.5 flex justify-between text-left w-full font-sans text-h6 group cursor-pointer"
    onClick={onClick}
  >
    <span className="text-xl font-medium pr-2.5">{label}</span>
    <Img image={icon} className="text-primary-main flex-shrink-0" width="24" height="24" asSVG />
  </button>
));
