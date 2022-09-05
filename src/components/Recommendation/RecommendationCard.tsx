import { JSX } from '@redneckz/uni-jsx';
import { Description } from '../../ui-kit/Description/Description';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import { BaseTile } from '../BaseTile/BaseTile';
import { SocialMedia } from '../Footer/SocialMedia';
import type { UniBlockProps } from '../../types';
import type { RecommendationCardTypes } from './RecommendationContent';
import { Heading } from '../../ui-kit/Heading/Heading';

export interface RecommendationCardProps extends RecommendationCardTypes, UniBlockProps {}

export const RecommendationCard = JSX<RecommendationCardProps>(
  ({ context, className = '', title, description, items, image, version, socialMedia }) => {
    return (
      <section
        className={`border border-solid box-border py-[30px] px-9 min-w-[515px] max-w-[515px] ${className}`}
        role="listitem"
      >
        <BaseTile
          context={context}
          className="flex justify-between"
          title={
            title ? (
              <Heading headingType="h4" as="h3" className="font-normal mb-3.5" title={title} />
            ) : null
          }
          image={image?.src && <Img className="mt-auto ml-7" image={image} />}
        >
          {description ? <Description className="text-left" description={description} /> : null}
          {items?.length ? (
            <List
              className="text-md font-light flex flex-col gap-2"
              items={items}
              version={version}
            />
          ) : null}
          <SocialMedia className="pt-[42px] pb-0" media={socialMedia} context={context} />
        </BaseTile>
      </section>
    );
  },
);
