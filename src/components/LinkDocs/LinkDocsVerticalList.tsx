import { JSX } from '@redneckz/uni-jsx';
import type { LinkDocsItem } from './LinkDocsContent';
import type { Picture } from '../../model/Picture';
import { LinkDocsListItem } from './LinkDocsListItem';

export interface LinkDocsVerticalListProps {
  hasBorder?: boolean;
  documents?: LinkDocsItem[];
  icon?: Picture;
}

export const LinkDocsVerticalList = JSX<LinkDocsVerticalListProps>(
  ({ hasBorder = true, documents, icon }) => {
    return (
      <div
        className={`text-s text-primary-main flex flex-col mt-5 ${hasBorder ? 'gap-3.5' : 'gap-2'}`}
        role="list"
      >
        {documents?.length
          ? documents.map((doc, i) => (
              <div key={String(i)} role="listitem">
                <LinkDocsListItem
                  className={
                    hasBorder ? 'rounded-md border-main-stroke border border-solid p-4' : ''
                  }
                  doc={doc}
                  icon={icon}
                />
              </div>
            ))
          : null}
      </div>
    );
  },
);
