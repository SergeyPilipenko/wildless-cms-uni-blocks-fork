import { JSX } from '@redneckz/uni-jsx';
import { ListItem } from './ListItem';
import type { ListItemSize, ListItemVersion, ListProps } from './ListProps';

const TEXT_STYLE_MAP: Record<ListItemVersion, string> = {
  primary: 'text-primary-text',
  secondary: 'text-white',
  gray: 'text-secondary-text',
};

const TEXT_SIZE_MAP: Record<ListItemSize, string> = {
  S: 'text-l-light',
  M: 'text-h6',
  L: 'text-h5',
};

const ITEM_INDENT_MAP = {
  S: 'ml-2',
  M: 'ml-3',
  L: 'ml-4',
};

export const List = JSX<ListProps>((props) => {
  const {
    className = '',
    hasIndent,
    isDotted,
    itemClassName = '',
    items,
    listItemSize = 'M',
    version = 'primary',
  } = props;

  if (!items?.length) {
    return null;
  }

  return (
    <section
      className={`${TEXT_STYLE_MAP[version]} ${TEXT_SIZE_MAP[listItemSize]} ${className} ${
        hasIndent ? ITEM_INDENT_MAP[listItemSize] : ''
      }`}
      role="list"
    >
      {items.map((item, i) => (
        <ListItem
          key={String(i)}
          className={`${itemClassName} mb-1.5`}
          isDotted={isDotted}
          version={version}
          size={listItemSize}
        >
          {item}
        </ListItem>
      ))}
    </section>
  );
});
