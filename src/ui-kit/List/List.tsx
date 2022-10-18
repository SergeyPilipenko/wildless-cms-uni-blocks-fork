import { JSX } from '@redneckz/uni-jsx';
import { ListItem } from './ListItem';
import type { ListItemSize, ListItemVersion, ListProps } from './ListProps';

const TEXT_STYLE_MAP: Record<ListItemVersion, string> = {
  primary: 'text-primary-text',
  secondary: 'text-white',
  gray: 'text-secondary-text',
  tile: 'text-primary-text',
  'tile-white': 'text-white',
};

const TEXT_SIZE_MAP: Record<ListItemSize, string> = {
  M: 'text-xl-light',
  L: 'text-h5-light',
};

export const List = JSX<ListProps>((props) => {
  const {
    className = '',
    itemClassName,
    isDotted,
    items,
    listItemSize = 'M',
    version = 'primary',
  } = props;

  return (
    <section
      className={`${TEXT_STYLE_MAP[version]} ${TEXT_SIZE_MAP[listItemSize]} ${className}`}
      role="list"
    >
      {items?.length
        ? items.map((_, i) => (
            <ListItem
              key={String(i)}
              className={itemClassName}
              isDotted={isDotted}
              version={version}
            >
              {_}
            </ListItem>
          ))
        : null}
    </section>
  );
});
