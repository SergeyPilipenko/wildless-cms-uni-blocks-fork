import { JSX } from '@redneckz/uni-jsx';
import { SwipeListControl } from '../../ui-kit/SwipeListControl/SwipeListControl';
import { LinkDocsListItem } from './LinkDocsListItem';
import type { LinkDocsVerticalListProps } from './LinkDocsVerticalList';

export const LinkDocsHorizontalList = JSX<LinkDocsVerticalListProps>(
  ({ hasBorder = true, documents, icon }) => (
    <SwipeListControl className="text-s text-primary-main mt-5">
      {documents?.length
        ? documents.map((doc, i) => (
            <LinkDocsListItem
              key={String(i)}
              className={hasBorder ? 'rounded-md border-main-stroke border border-solid p-4' : ''}
              doc={doc}
              icon={icon}
            />
          ))
        : null}
    </SwipeListControl>
  ),
);
