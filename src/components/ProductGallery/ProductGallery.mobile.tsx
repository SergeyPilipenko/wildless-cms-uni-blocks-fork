import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { ProductGalleryBlock } from './ProductGalleryBlock';
import type { ProductGalleryContent } from './ProductGalleryContent';

export interface ProductGalleryProps extends ProductGalleryContent, UniBlockProps {}

export const ProductGallery = JSX<ProductGalleryProps>(
  ({ className, context, duration = 0, slides = [] }) => {
    const galleryBlocks = slides.map((s) => s.productBlock);
    const [activeSlideIndex, setActiveSlideIndex] = context.useState(0);

    return (
      <section className={`font-sans bg-white overflow-hidden w-100 ${className || ''}`}>
        <div
          className={`flex duration-1000`}
          style={{ transform: `translateX(-${activeSlideIndex}00%)` }}
          role="list"
        >
          {galleryBlocks.map((block, i) => (
            <ProductGalleryBlock key={String(i)} block={block} context={context} />
          ))}
        </div>

        <div className="flex px-4 py-6">
          {slides.map((_, i) =>
            renderNavButton({
              i,
              activeSlideIndex,
              onClick: () => setActiveSlideIndex(i),
              duration,
            }),
          )}
        </div>
      </section>
    );
  },
);

function renderNavButton({ i, activeSlideIndex, onClick, duration }) {
  const isActiveBtn = i === activeSlideIndex;
  const progressBarClassName = isActiveBtn ? 'animate-slide bg-primary-main' : 'bg-main-divider';
  return (
    <button
      type="button"
      key={String(i)}
      onClick={onClick}
      className={`relative overflow-hidden border-0 bg-inherit cursor-pointer pl-0 mr-1.5 pt-4 pb-5 last:mr-0 grow basis-0`}
    >
      <div
        className={`absolute bottom-0 left-0 w-full h-[3px] ${progressBarClassName}`}
        style={{ animationDuration: `${duration}s`, animationFillMode: 'forwards' }}
      ></div>
    </button>
  );
}
