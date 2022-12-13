import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import type { BlockVersion } from '../../model/BlockVersion';
import { VersionStyleMap } from '../../model/BlockVersion';
import { BorderVersionStyleMap } from '../../model/BorderVersion';
import type { UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import type { ProductBlockInnerContent } from '../ProductBlock/ProductBlockContent';
import { ProductBlockInner } from '../ProductBlock/ProductBlockInner';
import type { ProductGalleryContent, ProductGalleryNav } from './ProductGalleryContent';

export interface ProductGalleryProps extends ProductGalleryContent, UniBlockProps {}

interface RenderNavButtonProps {
  slide?: ProductGalleryNav;
  i: number;
  activeSlideIndex?: number;
  onClick: () => void;
  version: BlockVersion;
}

type StyleType = {
  title: string;
  text: string;
};

const productBlockStyleMap: Record<BlockVersion, StyleType> = {
  primary: { title: 'text-secondary-text', text: 'text-secondary-text' },
  secondary: { title: 'text-white', text: 'text-white/80' },
};

export const ProductGallery = JSX<ProductGalleryProps>(
  ({ className = '', slides = [], version = 'primary', ...rest }) => {
    const galleryNav = slides.map((s) => s.nav);
    const galleryBlocks = slides.map((s) => s.productBlock);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
      <BlockWrapper
        className={`box-border pt-[50px] overflow-hidden relative font-sans w-100 mb-6 ${className}
        ${VersionStyleMap[version]}`}
        {...rest}
      >
        <div
          className="flex duration-1000 pb-14"
          style={{ transform: `translateX(-${activeSlideIndex}00%)` }}
          role="list"
        >
          {galleryBlocks.map((_, i) => renderProductBlock({ ..._, ...rest, version }, i))}
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

function renderProductBlock(block: ProductBlockInnerContent & UniBlockProps, i: number) {
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
          textBlockClassName="mb-[154px]"
          headlineVersion="XXL"
          {...block}
        />
      </div>
    </section>
  );
}

function renderNavButton({ slide, i, activeSlideIndex, onClick, version }: RenderNavButtonProps) {
  const isActiveBtn = i === activeSlideIndex;

  const btnClassName = isActiveBtn
    ? 'bg-white shadow-dark-blue/42 min-w-[350px] border-none p-6'
    : `min-w-[290px] hover:py-[26px] hover:py-[26px] ease-in duration-300 bg-white/10 px-6 py-5 backdrop-blur
      ${VersionStyleMap[version]}`;
  const btnTitleClassName = isActiveBtn
    ? 'text-primary-text !text-h6 p-2'
    : `text-l pb-1 ${productBlockStyleMap[version].title}`;
  const btnDescClassName = isActiveBtn
    ? 'text-secondary-text text-l-light'
    : `text-m-light ${productBlockStyleMap[version].text}`;

  return (
    <button
      type="button"
      key={String(i)}
      onClick={onClick}
      aria-label={slide?.title}
      className={`box-border relative overflow-hidden border border-white/50 cursor-pointer text-left mx-1 grow basis-0
        ${btnClassName} ${BorderVersionStyleMap[version]}
      `}
    >
      <div className="border-0 px-6">
        <div className={`last:pb-0 ${btnTitleClassName}`}>{slide?.title}</div>
        <div className={`text-secondary-text  ${btnDescClassName}`}>{slide?.description}</div>
      </div>
    </button>
  );
}
