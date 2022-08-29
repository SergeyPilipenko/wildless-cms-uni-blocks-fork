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
    icon = 'DocIconMonoColor',
    documents,
    orientation = 'vertical',
    hasBorder = true,
  }) => {
    return (
      <section
        className={`font-sans text-primary-text py-6 px-4 bg-white overflow-x-hidden ${className}`}
      >
        {title ? (
          <Heading
            headingType="h2"
            className={`text-center ${subtitle ? 'mb-2' : 'mb-5'}`}
            title={title}
          />
        ) : null}
        {subtitle ? (
          <h3 className="mt-0 font-normal mb-5 text-center text-m-md">{subtitle}</h3>
        ) : null}
        {orientation === 'vertical' ? (
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
