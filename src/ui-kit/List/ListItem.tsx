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

const LIST_STYLE_CLASSES = {
  primary: 'rounded-full inline-block mr-3 mt-2',
  secondary: 'rounded-full inline-block mr-3 mt-2',
  gray: 'rounded-full inline-block mr-3 mt-2',
  tile: 'rounded-full inline-block mr-4',
  'tile-white': 'rounded-full inline-block mr-4',
};

const LIST_DOT_STYLE_MAP: Record<ListItemVersion, string> = {
  primary: 'bg-primary-main',
  secondary: 'bg-white',
  gray: 'bg-secondary-text',
  tile: 'bg-black',
  'tile-white': 'bg-white',
};

export const ListItem = JSX<ListItemProps>(
  ({ className = '', isDotted = true, children, version = 'primary' }) => {
    return (
      <div className={`font-sans flex items-center ${className}`} role="listitem">
        {isDotted && <div className={getListStyle(version)} />}
        <span>{children}</span>
      </div>
    );
  },
);

const getListStyle = (version: ListItemVersion) => {
  const size = {
    primary: 'w-2 h-2 min-w-2 min-h-2',
    secondary: 'w-2 h-2 min-w-2 min-h-2',
    gray: 'w-1.5 h-1.5 min-w-1.5 min-h-1.5',
    tile: 'w-[7px] h-[7px] min-w-[7px] min-h-[7px]',
    'tile-white': 'w-[7px] h-[7px] min-w-[7px] min-h-[7px]',
  };
  return `${LIST_STYLE_CLASSES[version]} ${LIST_DOT_STYLE_MAP[version]} ${size[version]}`;
};
