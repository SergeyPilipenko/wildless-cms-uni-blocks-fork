import { JSX } from '@redneckz/uni-jsx';
import type { ListItemVersion } from './ListProps';

/**
 * @title Параметры элемента списка
 */
export interface ListItemProps {
  className?: string;
  version?: ListItemVersion;
  text?: string;
  isDotted?: boolean;
}

const LIST_STYLE_CLASSES = 'rounded-full inline-block mr-3 mt-3.5';

const LIST_DOT_STYLE_MAP: Record<ListItemVersion, string> = {
  primary: 'bg-primary-main',
  secondary: 'bg-white',
  gray: 'bg-secondary-text',
};

export const ListItem = JSX<ListItemProps>(
  ({ className = '', isDotted = true, children, version = 'primary' }) => {
    return (
      <div className={`font-sans flex items-start ${className}`} role="listitem">
        {isDotted && <div className={getListStyle(version)} />}
        <span>{children}</span>
      </div>
    );
  },
);

const getListStyle = (version: ListItemVersion) => {
  const size = version === 'gray' ? 'w-1.5 h-1.5 min-w-1.5 min-h-1.5' : 'w-2 h-2 min-w-2 min-h-2';
  return `${LIST_STYLE_CLASSES} ${LIST_DOT_STYLE_MAP[version]} ${size}`;
};
