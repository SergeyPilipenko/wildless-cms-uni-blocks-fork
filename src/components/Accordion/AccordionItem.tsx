import { JSX } from '@redneckz/uni-jsx';
import { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import { Icon } from '../../ui-kit/Icon/Icon';
import type { AccordionItemCommonProps } from './AccordionContent';
import { AccordionItemInner } from './AccordionItemInner';
import { useActiveHandler } from './useActiveHandler';

export interface AccordionItemProps extends AccordionItemCommonProps, UniBlockProps {}

const buttonStyleMap: Record<BlockVersion, string> = {
  primary: 'text-primary-text',
  secondary: 'text-white',
};

const buttonHoverStyleMap: Record<BlockVersion, string> = {
  primary: 'group-hover:text-primary-main',
  secondary: 'group-hover:text-white',
};

export const AccordionItem = JSX<AccordionItemProps>(
  ({ label, isExpanded, blocks, columns, context, version = 'primary' }) => {
    const { isActive, hasContent, icon, handleToggle } = useActiveHandler({
      context,
      blocks,
      initialState: isExpanded,
    });

    return (
      <li className="border-0 border-b border-solid border-main-divider last:border-b-0">
        <button
          className={`border-none bg-transparent px-0 py-5 flex justify-between text-left w-full font-sans ${
            buttonStyleMap[version]
          }
        ${hasContent ? 'group cursor-pointer' : ''}`}
          onClick={handleToggle}
        >
          <span
            className={`text-xl pr-2.5 font-medium ${
              hasContent ? buttonHoverStyleMap[version] : ''
            }`}
          >
            {label}
          </span>
          {hasContent ? <Icon name={icon} width="24" height="24" asSVG /> : null}
        </button>
        {hasContent ? (
          <AccordionItemInner
            isExpanded={isActive}
            columns={columns}
            blocks={blocks}
            version={version}
            context={context}
          />
        ) : null}
      </li>
    );
  },
);
