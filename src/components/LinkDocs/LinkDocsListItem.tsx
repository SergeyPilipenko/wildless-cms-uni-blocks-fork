import { JSX } from '@redneckz/uni-jsx';
import type { LinkDocsListItemProps } from './LinkDocsListItemBase';
import { LinkDocsListItemBase } from './LinkDocsListItemBase';

export const LinkDocsListItem = JSX<LinkDocsListItemProps>(({ className = '', doc, icon }) => (
  <LinkDocsListItemBase
    className={`flex h-full box-border ${className}`}
    iconClassName="mr-2.5 min-w-6 min-h-6"
    textClassName="self-center font-light"
    suffixClassName="text-secondary-text group-hover:text-primary-main"
    doc={doc}
    icon={icon}
  />
));
