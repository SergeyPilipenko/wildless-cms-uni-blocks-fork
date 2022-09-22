import { JSX } from '@redneckz/uni-jsx';
import { SwipeListControl } from '../../ui-kit/SwipeListControl/SwipeListControl';
import { LinkDocsListItem } from './LinkDocsListItem';
import type { LinkDocsVerticalListProps } from './LinkDocsVerticalList';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';

export interface LinkDocsHorizontalListProps extends LinkDocsVerticalListProps {
  context: ContentPageContext;
}

export const LinkDocsHorizontalList = JSX<LinkDocsHorizontalListProps>(
  ({ context, hasBorder = true, documents, icon }) => {
    return (
      <SwipeListControl context={context} className="text-m-sm text-primary-main mt-5">
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
    );
  },
);
