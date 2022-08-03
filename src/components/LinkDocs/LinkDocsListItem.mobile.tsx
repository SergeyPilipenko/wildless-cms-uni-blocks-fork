import { JSX } from '@redneckz/uni-jsx';
import { LinkDocsListItemBase } from './LinkDocsListItemBase';
import type { LinkDocsListItemProps } from './LinkDocsListItemBase';

export const LinkDocsListItem = JSX<LinkDocsListItemProps>(({ className = '', doc, icon }) => (
  <LinkDocsListItemBase
    className={`flex h-full ${className}`}
    iconClassName="mr-2.5 min-w-6 min-h-6"
    doc={doc}
    icon={icon}
  />
));
