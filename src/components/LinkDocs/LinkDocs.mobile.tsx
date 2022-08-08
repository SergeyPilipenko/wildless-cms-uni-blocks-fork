import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import type { LinkDocsContent } from './LinkDocsContent';
import { LinkDocsHorizontalList } from './LinkDocsHorizontalList';
import { LinkDocsVerticalList } from './LinkDocsVerticalList';

export interface LinkDocsProps extends LinkDocsContent, UniBlockProps {}

export const LinkDocs = JSX<LinkDocsProps>(
  ({
    className = '',
    context,
    title,
    subtitle,
    icon = 'DocIcon',
    documents,
    listMode = 'vertical',
    hasBorder = true,
  }) => {
    return (
      <section className={`py-6 px-4 bg-white ${className}`}>
        {title ? (
          <Heading
            headingType="h2"
            className={`text-center ${subtitle ? 'mb-2' : 'mb-5'}`}
            title={title}
          />
        ) : null}
        {subtitle ? <h3 className="mb-5 text-center text-m-base">{subtitle}</h3> : null}
        {listMode === 'vertical' ? (
          <LinkDocsVerticalList hasBorder={hasBorder} documents={documents} icon={icon} />
        ) : (
          <LinkDocsHorizontalList
            context={context}
            hasBorder={hasBorder}
            documents={documents}
            icon={icon}
          />
        )}
      </section>
    );
  },
);
