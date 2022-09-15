import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { BlockVersion } from '../../model/BlockVersion';
import type { ProductBlockInnerContent } from '../ProductBlock/ProductBlockContent';
import { ProductBlockInner } from '../ProductBlock/ProductBlockInner';
import type { ProductGalleryContent } from './ProductGalleryContent';

export interface ProductGalleryProps extends ProductGalleryContent, UniBlockProps {}

type StyleType = {
  title: string;
  text: string;
};

const productGalleryStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

const productBlockStyleMap: Record<BlockVersion, StyleType> = {
  primary: { title: 'text-secondary-text', text: 'text-secondary-text' },
  secondary: { title: 'text-white', text: 'text-white/80' },
};

const productSlideStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

export const ProductGallery = JSX<ProductGalleryProps>(
  ({ className = '', context, slides = [], version = 'primary', anchor = null }) => {
    const galleryNav = slides.map((s) => s.nav);
    const galleryBlocks = slides.map((s) => s.productBlock);
    const [activeSlideIndex, setActiveSlideIndex] = context.useState(0);

    return (
      <section
        id={anchor}
        className={`box-border pt-[50px] overflow-hidden relative font-sans w-100 ${className}
        ${productGalleryStyleMap[version]}`}
      >
        <div
          className="flex duration-1000 pb-14"
          style={{ transform: `translateX(-${activeSlideIndex}00%)` }}
          role="list"
        >
          {galleryBlocks.map((_, i) => renderProductBlock({ ..._, version }, i, context))}
        </div>

        <div className="flex items-center absolute bottom-6 left-0 right-0 px-[26px] box-border">
          {galleryNav.map((slide, i) =>
            renderNavButton({
              slide,
              i,
              activeSlideIndex,
              onClick: () => setActiveSlideIndex(i),
              version,
            }),
          )}
        </div>
      </section>
    );
  },
);

function renderProductBlock(block: ProductBlockInnerContent, i: number, context) {
  const { version } = block;
  const additionalClass = version ? productBlockStyleMap[version].title : '';

  return (
    <section
      key={String(i)}
      className="box-border relative flex grow-0 shrink-0 basis-full"
      role="listitem"
    >
      <div className="flex grow">
        <ProductBlockInner
          className={`pl-[50px] z-[1] ${additionalClass}`}
          context={context}
          textBlockClassName="mb-[154px]"
          {...block}
        />
      </div>
    </section>
  );
}

function renderNavButton({ slide, i, activeSlideIndex, onClick, version }) {
  const isActiveBtn = i === activeSlideIndex;

  const btnClassName = isActiveBtn
    ? 'bg-white shadow-dark-blue/42 h-[102px] w-[354px] min-w-[354px] p-0 border-none'
    : `min-w-[277px] px-0 pt-4 pb-[23px] hover:py-[26px] hover:py-[26px] ease-in duration-300 bg-white/10
      ${productSlideStyleMap[version]}`;
  const btnTitleClassName = isActiveBtn
    ? 'text-primary-text text-title-2xs'
    : `text-base ${productBlockStyleMap[version].title}`;
  const btnDescClassName = isActiveBtn
    ? 'text-secondary-text text-m-title-xs mt-2.5'
    : `text-m-md mt-1.5 ${productBlockStyleMap[version].text}`;

  const additionalBorder = version === 'secondary' ? 'border-white/50' : 'border-black/50';

  return (
    <button
      type="button"
      key={String(i)}
      onClick={onClick}
      aria-label={slide?.title}
      className={`box-border font-sans relative overflow-hidden border-[1px] border-white/50 cursor-pointer text-left mx-1 grow basis-0
        ${btnClassName} ${additionalBorder}
      `}
    >
      <div className="border-0 px-6">
        <div className={`font-medium ${btnTitleClassName}`}>{slide?.title}</div>
        <div className={`text-secondary-text ${btnDescClassName}`}>{slide.description}</div>
      </div>
    </button>
  );
}
