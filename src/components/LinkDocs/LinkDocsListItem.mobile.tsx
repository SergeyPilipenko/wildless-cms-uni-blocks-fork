import { JSX } from '@redneckz/uni-jsx';
import { LinkDocsListItemBase } from './LinkDocsListItemBase';
import type { LinkDocsListItemProps } from './LinkDocsListItemBase';

export const LinkDocsListItem = JSX<LinkDocsListItemProps>(({ className = '', doc, icon }) => (
  <LinkDocsListItemBase
    className={`flex h-full box-border ${className}`}
    iconClassName="mr-3 min-w-6 min-h-6"
    doc={doc}
    icon={icon}
  />
));
