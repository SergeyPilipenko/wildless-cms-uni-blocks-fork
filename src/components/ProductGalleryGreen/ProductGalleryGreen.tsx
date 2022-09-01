import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { BlockVersion } from '../../model/BlockVersion';
import { Icon } from '../../ui-kit/Icon/Icon';
import type { ProductBlockInnerContent } from '../ProductBlock/ProductBlockContent';
import { ProductBlockInner } from '../ProductBlock/ProductBlockInner';
import type { ProductGalleryGreenContent } from './ProductGalleryGreenContent';

export interface ProductGalleryProps extends ProductGalleryGreenContent, UniBlockProps {}

const productGalleryGreenStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

const productBlockStyleMap: Record<BlockVersion, string> = {
  primary: 'text-secondary-text',
  secondary: 'text-white/80',
};

const productSlideStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

export const ProductGalleryGreen = JSX<ProductGalleryProps>(
  ({ className = '', context, slides = [], version = 'primary', duration = 0, anchor = null }) => {
    const galleryNav = slides.map((s) => s.nav);
    const galleryBlocks = slides.map((s) => s.productBlock);
    const [activeSlideIndex, setActiveSlideIndex] = context.useState(0);

    return (
      <section
        id={anchor}
        className={`box-border pt-[70px] overflow-hidden relative font-sans w-100 ${className}
        ${productGalleryGreenStyleMap[version]}`}
      >
        <div
          className="flex duration-1000 pb-14"
          style={{ transform: `translateX(-${activeSlideIndex}00%)` }}
          role="list"
        >
          {galleryBlocks.map((_, i) => renderProductBlock({ ..._, version }, i, context))}
        </div>

        <div className="flex items-center absolute bottom-6 left-0 right-0 px-9 box-border">
          {galleryNav.map((slide, i) =>
            renderNavButton({
              slide,
              i,
              activeSlideIndex,
              onClick: () => setActiveSlideIndex(i),
              version,
              duration,
            }),
          )}
        </div>
      </section>
    );
  },
);

function renderProductBlock(block: ProductBlockInnerContent, i: number, context) {
  const { version } = block;
  const additionalClass = version ? productBlockStyleMap[version] : '';

  return (
    <section
      key={String(i)}
      className="box-border relative flex grow-0 shrink-0 basis-full px-9"
      role="listitem"
    >
      <div className="flex grow">
        {block.backgroundText ? (
          <div className="absolute text-[454px] font-bold text-white tracking-[-10px] leading-[299px] opacity-[.1] right-12 top-20 z-0">
            {block.backgroundText}
          </div>
        ) : null}
        <ProductBlockInner
          className={`pl-2.5 pt-2.5 pb-1.5 pr-[6.25rem] z-[1] ${additionalClass}`}
          context={context}
          textBlockClassName="mb-[154px]"
          {...block}
        />
        <Icon
          className="absolute right-[460px] top-[200px] z-0 mb-4"
          name="ArrowsRewindRight"
          width="230"
          height="187"
        />
      </div>
    </section>
  );
}

function renderNavButton({ slide, i, activeSlideIndex, onClick, version, duration }) {
  const isActiveBtn = i === activeSlideIndex;
  const btnClassName = isActiveBtn
    ? 'bg-white shadow-dark-blue/42 h-[102px] w-[354px] min-w-[354px] max-w-[354px] p-0 border-none'
    : `min-w-[277px] px-0 pt-4 pb-[23px] hover:py-[26px] hover:py-[26px] ease-in duration-300 
      ${productSlideStyleMap[version]}`;
  const btnTitleClassName = isActiveBtn ? 'text-primary-text' : productBlockStyleMap[version];
  const btnDescClassName = isActiveBtn ? 'text-secondary-text' : productBlockStyleMap[version];
  const additionalBorder = version === 'secondary' ? 'border-white/50' : '';
  const progressBarClassName = isActiveBtn ? 'animate-slide' : '';
  return (
    <button
      type="button"
      key={String(i)}
      onClick={onClick}
      aria-label={slide?.title}
      className={`box-border font-sans group relative overflow-hidden border-[1px] cursor-pointer text-left mx-1 grow basis-0 backdrop-blur-sm
      ${btnClassName} ${additionalBorder}
      `}
    >
      <div className="border-0 px-6">
        <div className={`font-medium ${btnTitleClassName}`}>{slide?.title}</div>
        <div className={`text-secondary-text ${btnDescClassName}`}>{slide.description}</div>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full h-[3px] bg-primary-main -translate-x-full ${progressBarClassName}`}
        style={{ animationDuration: `${duration}s`, animationFillMode: 'forwards' }}
      ></div>
    </button>
  );
}
