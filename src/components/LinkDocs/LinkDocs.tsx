import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Headline } from '../Headline/Headline';
import type { LinkColumnsMode, LinkDocsContent } from './LinkDocsContent';
import { LinkDocsList } from './LinkDocsList';

const linkColumnsModeStyleMap: Record<LinkColumnsMode, string> = {
  double: 'flex gap-x-5 gap-y-[26px] flex-wrap',
  single: 'flex gap-3.5 flex-col',
};

export interface LinkDocsProps extends LinkDocsContent, UniBlockProps {}

export const LinkDocs = JSX<LinkDocsProps>(
  ({
    className = '',
    title,
    description,
    align = 'center',
    documents,
    icon = { icon: 'DocIcon' },
    columnsMode = 'double',
    ...rest
  }) => (
    <BlockWrapper
      className={`font-sans text-primary-text p-[50px] bg-white ${className}`}
      {...rest}
    >
      <Headline
        className="!p-0"
        title={title}
        description={description}
        align={align}
        headlineVersion="M"
        as="h2"
        {...rest}
      />
      <LinkDocsList
        className={`mt-8 ${linkColumnsModeStyleMap[columnsMode]}`}
        columnsMode={columnsMode}
        documents={documents}
        icon={icon}
      />
    </BlockWrapper>
  ),
);
