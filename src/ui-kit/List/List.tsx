import { JSX } from '@redneckz/uni-jsx';
import { ListItem } from './ListItem';
import type { ListProps, ListItemVersion } from './ListProps';

const TEXT_STYLE_MAP: Record<ListItemVersion, string> = {
  primary: 'text-primary-text',
  secondary: 'text-white',
  gray: 'text-secondary-text',
};

export const List = JSX<ListProps>((props) => {
  const { className = '', itemClassName, isDotted, items, version = 'primary' } = props;

  return (
    <section className={`${TEXT_STYLE_MAP[version]} ${className}`} role="list">
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
