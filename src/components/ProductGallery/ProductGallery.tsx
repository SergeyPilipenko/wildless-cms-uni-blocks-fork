import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import type { ProductBlockInnerContent } from '../ProductBlock/ProductBlockContent';
import type { ProductGalleryContent } from './ProductGalleryContent';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { ProductBlockInner } from '../ProductBlock/ProductBlockInner';
import { VersionStyleMap } from '../../model/BlockVersion';

export interface ProductGalleryProps extends ProductGalleryContent, UniBlockProps {}

type StyleType = {
  title: string;
  text: string;
};

const productBlockStyleMap: Record<BlockVersion, StyleType> = {
  primary: { title: 'text-secondary-text', text: 'text-secondary-text' },
  secondary: { title: 'text-white', text: 'text-white/80' },
};

export const ProductGallery = JSX<ProductGalleryProps>(
  ({ className = '', context, slides = [], version = 'primary', ...rest }) => {
    const galleryNav = slides.map((s) => s.nav);
    const galleryBlocks = slides.map((s) => s.productBlock);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
      <BlockWrapper
        context={context}
        className={`box-border pt-[50px] overflow-hidden relative font-sans w-100 ${className}
        ${VersionStyleMap[version]}`}
        {...rest}
      >
        <div
          className="flex duration-1000 pb-14"
          style={{ transform: `translateX(-${activeSlideIndex}00%)` }}
          role="list"
        >
          {galleryBlocks.map((_, i) => renderProductBlock({ ..._, version }, i, context))}
        </div>

        <div className="flex items-center absolute bottom-6 left-0 right-0 px-[26px] box-border h-28">
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
      </BlockWrapper>
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
          className={`pl-[50px] z-10 ${additionalClass}`}
          context={context}
          textBlockClassName="mb-[154px]"
          {...block}
          headlineVersion="XXL"
        />
      </div>
    </section>
  );
}

function renderNavButton({ slide, i, activeSlideIndex, onClick, version }) {
  const isActiveBtn = i === activeSlideIndex;

  const btnClassName = isActiveBtn
    ? 'bg-white shadow-dark-blue/42 w-[354px] min-w-[354px] border-none'
    : `min-w-[277px] hover:py-[26px] hover:py-[26px] ease-in duration-300 bg-white/10
      ${VersionStyleMap[version]}`;
  const btnTitleClassName = isActiveBtn
    ? 'text-primary-text text-h6'
    : `text-l ${productBlockStyleMap[version].title}`;
  const btnDescClassName = isActiveBtn
    ? 'text-secondary-text text-m-title-xs mt-2.5'
    : `text-m mt-1.5 ${productBlockStyleMap[version].text}`;

  const additionalBorder = version === 'secondary' ? 'border-white/50' : 'border-black/50';

  return (
    <button
      type="button"
      key={String(i)}
      onClick={onClick}
      aria-label={slide?.title}
      className={`box-border font-sans relative overflow-hidden border border-white/50 cursor-pointer text-left mx-1 grow basis-0 pt-5 pb-[23px]
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
