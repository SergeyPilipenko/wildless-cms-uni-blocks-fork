import { JSX } from '@redneckz/uni-jsx';
import type { ListItemSize, ListItemVersion } from './ListProps';
/**
 * @title Параметры элемента списка
 */
export interface ListItemProps {
  className?: string;
  version?: ListItemVersion;
  text?: string;
  isDotted?: boolean;
  size?: ListItemSize;
}

const LIST_DOT_STYLE_MAP: Record<ListItemVersion, string> = {
  primary: 'bg-primary-text',
  secondary: 'bg-white',
  gray: 'bg-secondary-text',
};

const DOT_SIZE_MAP = {
  L: 'w-1.5 h-1.5 min-w-1.5 min-h-1.5 mr-4 mt-3',
  M: 'w-1.5 h-1.5 min-w-1.5 min-h-1.5 mr-3 mt-3',
  S: 'w-1 h-1 min-w-1 min-h-1 mr-2 mt-2.5',
};

export const ListItem = JSX<ListItemProps>(
  ({ className = '', isDotted = true, children, version = 'primary', size = 'M' }) => {
    return (
      <div className={`font-sans flex items-start ${className}`} role="listitem">
        {isDotted ? (
          <div
            className={`rounded-full inline-block ${LIST_DOT_STYLE_MAP[version]} ${DOT_SIZE_MAP[size]}`}
          />
        ) : null}
        <span>{children}</span>
      </div>
    );
  },
);
