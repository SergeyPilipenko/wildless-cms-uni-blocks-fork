import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Icon } from '../../ui-kit/Icon/Icon';
import type { ProductBlockInnerContent } from '../ProductBlock/ProductBlockContent';
import { ProductBlockInner } from '../ProductBlock/ProductBlockInner';
import type { ProductGalleryGreenContent } from './ProductGalleryGreenContent';

export interface ProductGalleryProps extends ProductGalleryGreenContent, UniBlockProps {}

export const ProductGalleryGreen = JSX<ProductGalleryProps>(
  ({ className = '', context, slides = [], anchor = null }) => {
    const galleryNav = slides.map((s) => s.nav);
    const galleryBlocks = slides.map((s) => s.productBlock);
    const [activeSlideIndex, setActiveSlideIndex] = context.useState(0);

    return (
      <section
        className={`box-border pt-[70px] relative font-sans overflow-hidden bg-primary-main w-100 ${className}`}
        id={anchor}
      >
        <div
          className="flex duration-1000 pb-14"
          style={{ transform: `translateX(-${activeSlideIndex}00%)` }}
          role="list"
        >
          {galleryBlocks.map((_, i) => renderProductBlock(_, i, context))}
        </div>

        <div className="flex items-center absolute bottom-6 left-0 right-0 px-9 box-border">
          {galleryNav.map((slide, i) =>
            renderNavButton({
              slide,
              i,
              activeSlideIndex,
              onClick: () => setActiveSlideIndex(i),
            }),
          )}
        </div>
      </section>
    );
  },
);

function renderProductBlock(block: ProductBlockInnerContent, i: number, context) {
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
          className="pl-2.5 pt-2.5 pb-1.5 pr-[6.25rem] z-[1]"
          context={context}
          textBlockClassName="mb-[154px]"
          version="secondary"
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

function renderNavButton({ slide, i, activeSlideIndex, onClick }) {
  const isActiveBtn = i === activeSlideIndex;
  const btnClassName = isActiveBtn
    ? 'bg-white shadow-dark-blue/42 h-[102px] w-[354px] min-w-[354px] max-w-[354px] p-0'
    : 'bg-white/10 min-w-[277px] px-0 pt-4 pb-[23px] hover:pt-[21px] hover:pb-7 ease-in duration-300';
  const btnTitleClassName = isActiveBtn
    ? 'text-[18px] text-primary-text pb-[10px]'
    : 'text-m-base text-white pb-[3px]';
  const btnDescClassName = isActiveBtn
    ? 'text-[18px] text-secondary-text'
    : 'text-m-base text-white';

  return (
    <button
      type="button"
      key={String(i)}
      onClick={onClick}
      aria-label={slide?.title}
      className={`box-border font-sans group relative overflow-hidden border-white/50 border-[1px] cursor-pointer text-left mb-6a mx-1 grow basis-0 backdrop-blur-sm
        ${btnClassName}
      `}
    >
      <div className="border-0 px-6">
        <div className={`font-medium ${btnTitleClassName}`}>{slide?.title}</div>
        <div className={`text-secondary-text ${btnDescClassName}`}>{slide.description}</div>
      </div>
    </button>
  );
}
