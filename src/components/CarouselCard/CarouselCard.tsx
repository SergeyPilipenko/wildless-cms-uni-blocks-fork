import { Headline } from '../Headline/Headline';
import { JSX } from '@redneckz/uni-jsx';
import { renderButton } from '../../ui-kit/Button/ButtonSection';
import type { CarouselCardContent } from './CarouselCardContent';
import type { CarouselCardVersion } from '../../model/CarouselCardVersion';
import type { UniBlockProps } from '../../model/JSXBlock';

export interface CarouselCardProps extends CarouselCardContent, UniBlockProps {
  version?: CarouselCardVersion;
}

const BLOCK_CLASSES = 'absolute border border-solid border-main-stroke w-[100%] h-[100%]';

const CARD_STYLE_MAP: Record<CarouselCardVersion, string> = {
  normal: 'min-w-[100%] justify-center items-center my-7 col-span-12',
  mini: 'w-1/3 justify-center items-center mx-4 my-9 col-span-4',
};

const CARD_WIDTH_MAP: Record<CarouselCardVersion, string> = {
  normal: 'w-[1007px]',
  mini: 'w-[350px]',
};

export const CarouselCard = JSX<CarouselCardProps>(
  ({ button, className = '', description, title, version = 'normal' }) => {
    return (
      <section className={`flex ${CARD_STYLE_MAP[version]}`}>
        <div className={`relative ${CARD_WIDTH_MAP[version]}`}>
          <div
            className={`relative bg-white py-6 px-10 z-10
              border border-solid border-green-light ${className}`}
          >
            <Headline
              className="!p-0"
              title={title}
              description={description}
              headlineVersion="M"
              align="center"
            />
            {button ? renderButton({ button, buttonClassName: 'mt-6 w-[158px]' }) : null}
          </div>
          <div className={`top-9 right-12 bg-green-dark ${BLOCK_CLASSES}`} />
          <div className={`top-6 right-8 bg-green ${BLOCK_CLASSES}`} />
          <div className={`top-3 right-4 bg-green-light ${BLOCK_CLASSES}`} />
        </div>
      </section>
    );
  },
);
