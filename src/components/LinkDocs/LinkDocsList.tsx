import { JSX } from '@redneckz/uni-jsx';
import { LinkDocsListItem } from './LinkDocsListItem';
import type { IconName } from '../../icons/IconName';
import type { LinkColumnsMode, LinkDocsItem } from './LinkDocsContent';

export interface LinkDocsListProps {
  className?: string;
  documents?: LinkDocsItem[];
  columnsMode?: LinkColumnsMode;
  icon?: IconName;
}

export const LinkDocsList = JSX<LinkDocsListProps>(
  ({ className, documents, columnsMode = 'double', icon }) => {
    return documents?.length ? (
      <div className={className} role="list">
        {documents.map((doc, i) => (
          <div
            key={String(i)}
            className={columnsMode === 'double' ? 'basis-[calc(50%-20px)]' : ''}
            role="listitem"
          >
            <LinkDocsListItem
              className="group flex text-sm align-middle h-fit w-fit text-primary-text no-underline hover:text-primary-main"
              doc={doc}
              icon={icon}
            />
          </div>
        ))}
      </div>
    ) : null;
  },
);
