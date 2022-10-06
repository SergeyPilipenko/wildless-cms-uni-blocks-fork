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
    const tileTitle = title ? (
      <Heading headingType="h5" as="h3" className="font-normal mb-3.5 z-10" title={title} />
    ) : null;
    const tileImage = image?.src ? (
      <Img className="absolute bottom-0 right-0 m-0" image={image} />
    ) : null;

    return (
      <section
        className={`relative overflow-hidden text-left border border-solid box-border p-7 min-w-[524px] min-h-[218px] ${className}`}
        role="listitem"
      >
        <BaseTile
          context={context}
          className="flex justify-between"
          title={tileTitle}
          image={tileImage}
        >
          {description ? <Description className="mb-2" description={description} /> : null}
          {items?.length ? (
            <List
              className="text-md font-light flex flex-col flex-1 gap-2 max-w-[236px]"
              items={items}
              version={version}
            />
          ) : null}
          {socialMedia ? (
            <SocialMedia
              className="pt-[42px] pb-0"
              media={socialMedia}
              version={version}
              context={context}
            />
          ) : null}
        </BaseTile>
      </section>
    );
  },
);
