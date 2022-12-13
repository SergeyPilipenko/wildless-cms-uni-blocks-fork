import { JSX } from '@redneckz/uni-jsx';
import { VersionStyleMap } from '../../model/BlockVersion';
import type { GalleryVersion } from '../../model/GalleryVersion';
import { Headline } from '../Headline/Headline';
import { cardStyleMap, cardWidthMap, galleryLengthForScrollMap } from './constants';
import { GalleryCardInner } from './GalleryCardInner';
import type { GalleryCardProps } from './GalleryContent';
import type { GalleryInnerProps } from './GalleryInner';

export interface GalleryContainerProps extends GalleryInnerProps {
  activeCardIndex: number;
}

export interface GalleryCardData {
  card: GalleryCardProps;
  version: GalleryVersion;
}

export const GalleryContainer = JSX<GalleryContainerProps>(
  ({ headlineVersion = 'M', cards = [], version = 'normal', activeCardIndex, ...rest }) => {
    return (
      <div>
        <Headline {...rest} className="!p-0" headlineVersion={headlineVersion} align="center" />
        <div
          className={`flex mt-8 ${
            cards?.length <= galleryLengthForScrollMap[version] ? 'justify-center' : ''
          } duration-1000`}
          style={{ transform: `translateX(-${activeCardIndex * cardWidthMap[version]}px)` }}
          role="list"
        >
          {cards?.map((card, i) => renderCard({ card, version }, i))}
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
