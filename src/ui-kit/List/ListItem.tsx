import { JSX } from '@redneckz/uni-jsx';
import { ListItemVersion } from './ListProps';

/**
 * @title Параметры элемента списка
 */
export interface ListItemProps {
  className?: string;
  version?: ListItemVersion;
  text?: string;
  isDotted?: boolean;
}

const LIST_STYLE_CLASSES = 'rounded-full inline-block mr-3 mt-2';

const TEXT_STYLE_MAP: Record<ListItemVersion, string> = {
  primary: 'text-primary-text',
  secondary: 'text-white',
  gray: 'text-secondary-text',
};

const LIST_STYLE_MAP: Record<ListItemVersion, string> = {
  primary: 'bg-primary-main',
  secondary: 'bg-white',
  gray: 'bg-secondary-text',
};

export const ListItem = JSX<ListItemProps>(
  ({ className = '', isDotted = true, children, version = 'primary' }) => {
    return (
      <div className={`font-sans flex items-start ${className}`} role="listitem">
        {isDotted && <div className={getListStyle(version)} />}
        <span className={`text-m-md ${TEXT_STYLE_MAP[version]}`}>{children}</span>
      </div>
    );
  },
);

const getListStyle = (version: ListItemVersion) => {
  const size =
    version === 'gray' ? 'w-[6px] h-[6px] min-w-[6px] min-h-[6px]' : 'w-2 h-2 min-w-2 min-h-2';
  return `${LIST_STYLE_CLASSES} ${LIST_STYLE_MAP[version]} ${size}`;
};
