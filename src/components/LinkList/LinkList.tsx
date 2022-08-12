import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { LinkListContent } from './LinkListContent';

export interface LinkListProps extends LinkListContent, UniBlockProps {}

export const LinkList = JSX<LinkListProps>(({ className = '', documents }) => {
  return (
    <section className={`font-sans bg-white mt-[10px] ${className}`}>
      <ul className="flex flex-col text-sm text-secondary-text p-0">
        {documents?.length ? renderLinkListItem(documents) : null}
      </ul>
    </section>
  );
});

const renderLinkListItem = (documents) => {
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
