import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import { Description } from '../../ui-kit/Description/Description';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import { BaseTile } from '../BaseTile/BaseTile';
import type { RecommendationCardContent } from './RecommendationContent';

export interface RecommendationCardProps extends RecommendationCardContent, UniBlockProps {
  version?: BlockVersion;
}

export const RecommendationCard = JSX<RecommendationCardProps>(
  ({ context, className = '', title, description, items, image, version }) => {
    return (
      <section
        className={`border border-solid box-border rounded-md p-7 min-w-[515px] max-w-[515px] ${className}`}
        role="listitem"
      >
        <BaseTile
          context={context}
          title={title && <Heading headingType="h4" title={title} className="mb-4" />}
          image={image?.src && <Img className="mt-auto ml-7" image={image} />}
        >
          {description ? <Description description={description} /> : null}
          {items?.length ? <List className="text-m-base" items={items} version={version} /> : null}
        </BaseTile>
      </section>
    );
  },
);
