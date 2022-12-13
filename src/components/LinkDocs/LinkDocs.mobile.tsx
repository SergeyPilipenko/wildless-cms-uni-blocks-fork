import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/JSXBlock';
import { Headline } from '../Headline/Headline';
import type { LinkDocsContent } from './LinkDocsContent';
import { LinkDocsHorizontalList } from './LinkDocsHorizontalList';
import { LinkDocsVerticalList } from './LinkDocsVerticalList';

export interface LinkDocsProps extends LinkDocsContent, UniBlockProps {}

export const LinkDocs = JSX<LinkDocsProps>(
  ({
    className = '',
    title,
    description,
    icon = { icon: 'DocIconMonoColor' },
    documents,
    orientation = 'vertical',
    hasBorder = true,
    ...rest
  }) => (
    <section
      className={`font-sans text-primary-text py-6 px-4 bg-white overflow-x-hidden ${className}`}
    >
      <Headline
        className={`!p-0 ${description ? 'gap-2' : 'gap-5'}`}
        title={title}
        description={description}
        align="center"
        {...rest}
      />
      {orientation === 'vertical' ? (
        <LinkDocsVerticalList hasBorder={hasBorder} documents={documents} icon={icon} />
      ) : (
        <LinkDocsHorizontalList hasBorder={hasBorder} documents={documents} icon={icon} />
      )}
    </section>
  ),
);
