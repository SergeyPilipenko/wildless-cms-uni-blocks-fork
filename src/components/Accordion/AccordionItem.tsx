import { JSX } from '@redneckz/uni-jsx';
import { Foldable } from '../../ui-kit/Foldable/Foldable';
import { FoldableSection } from '../../ui-kit/Foldable/FoldableSection';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import { Img } from '../../ui-kit/Img/Img';
import type { AccordionItemProps } from './AccordionItemProps';

const icons: IconName[] = ['PlusIcon', 'MinusIcon'];

export const AccordionItem = JSX<AccordionItemProps>(
  ({ label = '', children, hasContent = true }) => (
    <li className="border-0 border-b border-solid border-main-divider last:border-b-0">
      <Foldable
        isFoldButtonOnTop={true}
        renderFoldableSection={({ isUnfolded }) => (
          <FoldableSection className="grid grid-cols-12" isUnfolded={isUnfolded}>
            {children}
          </FoldableSection>
        )}
        renderFoldButton={({ isUnfolded, onToggle }) => (
          <FoldButton
            label={label}
            icon={icons[Number(isUnfolded)]}
            hasContent={hasContent}
            onClick={onToggle}
          />
        )}
      />
    </li>
  ),
);

interface FoldButtonProps {
  label: string;
  icon: IconName;
  hasContent: boolean;
  onClick?: () => void;
}

const FoldButton = JSX<FoldButtonProps>(({ label, icon, hasContent, onClick }) => (
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
