import { JSX } from '@redneckz/uni-jsx';
import { ListItem } from './ListItem';
import { ListProps } from './ListProps';

export const List = JSX<ListProps>((props) => {
  const { className = '', itemClassName, isDotted, items, version } = props;

  return (
    <section className={`${className}`} role="list">
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
