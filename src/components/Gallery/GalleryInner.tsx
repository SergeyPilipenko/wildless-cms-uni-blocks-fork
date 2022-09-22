import { JSX } from '@redneckz/uni-jsx';
import type { GalleryVersion } from '../../model/GalleryVersion';
import type { UniBlockProps } from '../../types';
import type { GalleryContent } from './GalleryContent';
import { galleryLengthForScrollMap } from './constants';
import { GalleryContainer } from './GalleryContainer';
import { renderArrows } from '../../ui-kit/Button/renderArrows';

export interface GalleryInnerProps extends GalleryContent, UniBlockProps {
  version?: GalleryVersion;
}

export const GalleryInner = JSX<GalleryInnerProps>(
  ({ context, cards = [], className = '', version = 'normal', anchor = null, ...rest }) => {
    const [activeCardIndex, setActiveCardIndex] = context.useState(0);

    const handleNextClick = () => setActiveCardIndex(activeCardIndex + 1);
    const handlePrevClick = () => setActiveCardIndex(activeCardIndex - 1);

    const isGalleryScrollAvailable = cards?.length > galleryLengthForScrollMap[version];

    const showNextButton =
      isGalleryScrollAvailable &&
      cards?.length - activeCardIndex > galleryLengthForScrollMap[version];

    const showPrevButton = isGalleryScrollAvailable && activeCardIndex > 0;

    return (
      <section
        className={`relative font-sans text-primary-text bg-white p-[42px] overflow-hidden ${className}`}
        id={anchor}
      >
        <GalleryContainer
          context={context}
          cards={cards}
          version={version}
          activeCardIndex={activeCardIndex}
          {...rest}
        />
        {renderArrows({
          handler: [handlePrevClick, handleNextClick],
          isShown: [showPrevButton, showNextButton],
          btnClass: ['left-8', 'right-8'],
          className: 'top-1/2',
        })}
        <div className="absolute top-0 left-0 bottom-0 w-[82px] bg-opacity-from-white" />
        <div className="absolute top-0 right-0 bottom-0 w-[82px] bg-opacity-to-white" />
      </section>
    );
  },
);
