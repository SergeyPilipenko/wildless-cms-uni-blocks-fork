import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/JSXBlock';
import type { LinkProps } from '../../model/LinkProps';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import type { LinkListContent } from './LinkListContent';

export interface LinkListProps extends LinkListContent, UniBlockProps {}

export const LinkList = JSX<LinkListProps>(({ className = '', documents, ...rest }) => (
  <BlockWrapper className={`font-sans bg-white mt-[10px] ${className}`} {...rest}>
    <ul className="flex flex-col text-s text-secondary-text p-0">
      {documents?.length ? renderLinkListItem(documents) : null}
    </ul>
  </BlockWrapper>
));

const renderLinkListItem = (documents: LinkProps[]) => {
  return documents.map((doc, i) => {
    const { text, ...linkProps } = doc;

    return (
      <li key={`list_item_${String(i)}`} className="mb-4 list-none">
        <a className="hover:text-primary-main" role="link" {...linkProps}>
          {text ? text : null}
        </a>
      </li>
    );
  });
};
