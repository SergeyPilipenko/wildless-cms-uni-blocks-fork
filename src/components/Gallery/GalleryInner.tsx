import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import type { UniBlockProps } from '../../model/ContentPageDef';
import type { GalleryVersion } from '../../model/GalleryVersion';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { renderArrows } from '../../ui-kit/Button/renderArrows';
import { galleryLengthForScrollMap } from './constants';
import { GalleryContainer } from './GalleryContainer';
import type { GalleryContent } from './GalleryContent';

export interface GalleryInnerProps extends GalleryContent, UniBlockProps {
  version?: GalleryVersion;
}

export const GalleryInner = JSX<GalleryInnerProps>(
  ({ context, cards = [], className = '', version = 'normal', ...rest }) => {
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const handleNextClick = () => setActiveCardIndex(activeCardIndex + 1);
    const handlePrevClick = () => setActiveCardIndex(activeCardIndex - 1);

    const isGalleryScrollAvailable = cards?.length > galleryLengthForScrollMap[version];

    const showNextButton =
      isGalleryScrollAvailable &&
      cards?.length - activeCardIndex > galleryLengthForScrollMap[version];

    const showPrevButton = isGalleryScrollAvailable && activeCardIndex > 0;

    return (
      <BlockWrapper
        context={context}
        className={`relative font-sans text-primary-text bg-white p-[42px] overflow-hidden ${className}`}
        {...rest}
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
      </BlockWrapper>
    );
  },
);
