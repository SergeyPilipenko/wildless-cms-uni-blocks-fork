import { JSX } from '@redneckz/uni-jsx';
import { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import { Description } from '../../ui-kit/Description/Description';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import { BaseTile } from '../BaseTile/BaseTile';
import { SocialMedia } from '../Footer/SocialMedia';
import type { RecommendationCardTypes } from './RecommendationContent';

export interface RecommendationCardProps extends RecommendationCardTypes, UniBlockProps {
  version?: BlockVersion;
}

export const RecommendationCard = JSX<RecommendationCardProps>(
  ({ context, className = '', title, description, items, image, version, socialMedia }) => {
    return (
      <section
        className={`border border-solid box-border p-[30px] min-w-[524px] ${className}`}
        role="listitem"
      >
        <BaseTile
          context={context}
          className="flex justify-between"
          title={
            title ? (
              <Heading headingType="h5" as="h3" className="font-normal mb-3.5" title={title} />
            ) : null
          }
          image={image?.src && <Img className="mt-auto ml-7" image={image} />}
        >
          {description ? <Description className="text-left" description={description} /> : null}
          {items?.length ? (
            <List
              className="text-xl-light text-left flex flex-col flex-1 gap-2"
              items={items}
              version={version}
            />
          ) : null}
          <SocialMedia
            className="pt-[42px] pb-0"
            media={socialMedia}
            version={version}
            context={context}
          />
        </BaseTile>
      </section>
    );
  },
);
