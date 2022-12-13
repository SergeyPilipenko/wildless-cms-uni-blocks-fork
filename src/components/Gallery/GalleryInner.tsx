import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import type { GalleryVersion } from '../../model/GalleryVersion';
import type { UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { renderButton } from '../../ui-kit/Button/ButtonSection';
import { renderArrows } from '../../ui-kit/Button/renderArrows';
import { galleryLengthForScrollMap } from './constants';
import { GalleryContainer } from './GalleryContainer';
import type { GalleryContent } from './GalleryContent';

export interface GalleryInnerProps extends GalleryContent, UniBlockProps {
  version?: GalleryVersion;
}

export const GalleryInner = JSX<GalleryInnerProps>(
  ({ cards = [], className = '', version = 'normal', button, ...rest }) => {
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
        className={`relative font-sans text-primary-text bg-white p-[42px] overflow-hidden flex flex-col ${className}`}
        {...rest}
      >
        <GalleryContainer
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
        {isGalleryScrollAvailable ? (
          <div>
            <div className="absolute top-0 left-0 bottom-0 w-[82px] bg-opacity-from-white" />
            <div className="absolute top-0 right-0 bottom-0 w-[82px] bg-opacity-to-white" />
          </div>
        ) : null}

        {button ? renderButton({ button, buttonClassName: 'mt-8 mx-auto' }) : null}
      </BlockWrapper>
    );
  },
);
