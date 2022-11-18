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
}) => {
  const listVersion = version === 'primary' ? 'gray' : version;

  return items ? (
    <List
      className={`mt-4 ${className}`}
      version={listVersion}
      items={items}
      listItemSize="S"
      isDotted={isDotted}
    />
  ) : null;
};
