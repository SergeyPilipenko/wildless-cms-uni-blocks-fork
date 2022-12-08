import { JSX } from '@redneckz/uni-jsx';
import { getParentBlockContent } from '../../model/getParentBlockContent';
import type { JSXBlock } from '../../model/JSXBlock';
import type { Picture } from '../../model/Picture';
import { Foldable } from '../../ui-kit/Foldable/Foldable';
import { FoldableSection } from '../../ui-kit/Foldable/FoldableSection';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import { Img } from '../../ui-kit/Img/Img';
import type { AccordionContent } from '../Accordion/AccordionContent';
import type { AccordionItemProps } from './AccordionItemProps';
import { getIconWithVersion } from '../../utils/getIconWithVersion';

const icons: IconName[] = ['PlusIcon', 'MinusIcon'];

export const AccordionItem: JSXBlock<AccordionItemProps> = JSX<AccordionItemProps>(
  ({ className = '', ancestors, label = '', labelIcon, isExpanded, children }) => {
    const { bordered } = getParentBlockContent(ancestors, {} as AccordionContent);

    return (
      <li
        className={`${
          bordered ? 'border p-4 rounded mb-4' : 'border-0 border-b last:border-b-0'
        } border-solid border-main-divider ${className}`}
      >
        <Foldable
          isFoldButtonOnTop={true}
          unfoldedByDefault={isExpanded}
          renderFoldableSection={({ isUnfolded }) => (
            <FoldableSection
              className="flex flex-wrap group-last:last:pb-0 gap-5 [&>*]:p-0"
              isUnfolded={isUnfolded}
            >
              {children}
            </FoldableSection>
          )}
          renderFoldButton={({ isUnfolded, onToggle }) => (
            <FoldButton
              className={bordered ? '' : 'py-[14px] px-0'}
              label={label}
              icon={icons[Number(isUnfolded)]}
              primaryIcon={labelIcon}
              onClick={onToggle}
            />
          )}
        />
      </li>
    );
  },
);

AccordionItem.childrenTypes = [];

interface FoldButtonProps {
  className?: string;
  label: string;
  icon: IconName;
  primaryIcon?: Picture;
  onClick?: () => void;
}

const FoldButton = JSX<FoldButtonProps>(({ className, icon, label, primaryIcon, onClick }) => (
  <button
    className={`border-none bg-transparent flex justify-between text-left w-full font-sans text-primary-text group cursor-pointer ${className}`}
    onClick={onClick}
  >
    <span className="text-m-title-xs font-medium pr-2.5 flex group-hover:text-primary-main">
      {primaryIcon ? (
        <Img
          image={getIconWithVersion(primaryIcon)}
          className="mr-3 flex-shrink-0"
          width="24"
          height="24"
          asSVG
        />
      ) : null}
      {label}
    </span>
    <Img
      className="flex-shrink-0"
      image={getIconWithVersion({ icon: icon })}
      width="24"
      height="24"
      asSVG
    />
  </button>
));
