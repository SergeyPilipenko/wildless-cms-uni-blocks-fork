import { JSX } from '@redneckz/uni-jsx';
import { VersionStyleMap } from '../../model/BlockVersion';
import type { GalleryVersion } from '../../model/GalleryVersion';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';
import { Headline } from '../Headline/Headline';
import { cardStyleMap, cardWidthMap, galleryLengthForScrollMap } from './constants';
import { GalleryCardInner } from './GalleryCardInner';
import type { GalleryCardProps } from './GalleryContent';
import type { GalleryInnerProps } from './GalleryInner';

export interface GalleryContainerProps extends Omit<GalleryInnerProps, 'className'> {
  activeCardIndex: number;
}

export interface GalleryCardData {
  card: GalleryCardProps;
  version: GalleryVersion;
  context: ContentPageContext;
}

export const GalleryContainer = JSX<GalleryContainerProps>(
  ({
    context,
    title,
    headlineVersion = 'L',
    description,
    cards = [],
    version = 'normal',
    activeCardIndex,
  }) => {
    return (
      <div>
        <div className="absolute top-0 left-0 bottom-0 w-[84px] bg-gradient-to-r from-white to-transparent" />
        <Headline
          context={context}
          className="!p-0"
          title={title}
          description={description}
          headlineVersion={headlineVersion}
          align="center"
        />
        <div
          className={`flex mt-8 ${
            cards?.length <= galleryLengthForScrollMap[version] ? 'justify-center' : ''
          } duration-1000`}
          style={{ transform: `translateX(-${activeCardIndex * cardWidthMap[version]}px)` }}
          role="list"
        >
          {cards?.map((card, i) => renderCard({ card, version, context }, i))}
        </div>
      </div>
    );
  },
);

function renderCard({ card, version }: GalleryCardData, i: number) {
  return (
    <section
      className={`box-border border-solid border border-main-stroke p-6 mx-2 flex flex-col justify-between
        items-stretch ${cardStyleMap[version]} ${
        VersionStyleMap[card.version ?? 'primary']
      } w-full col-span-4`}
      key={String(i)}
      role="listitem"
    >
      <GalleryCardInner {...card} />
    </section>
  );
}
