import { List } from '../../ui-kit/List/List';
import type { BlockVersion } from '../../model/BlockVersion';

export const renderItems = ({
  items,
  isDotted = true,
  version = 'primary',
  className = '',
}: {
  items?: string[];
  isDotted?: boolean;
  version?: BlockVersion;
  className?: string;
}) =>
  items ? (
    <List
      className={className}
      version={version}
      items={items}
      listItemSize="M"
      isDotted={isDotted}
    />
  ) : null;
