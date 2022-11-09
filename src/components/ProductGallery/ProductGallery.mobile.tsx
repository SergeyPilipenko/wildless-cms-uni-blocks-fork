import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/ContentPageDef';
import { SwipeListControl } from '../../ui-kit/SwipeListControl/SwipeListControl';
import { ProductGalleryBlock } from './ProductGalleryBlock';
import type { ProductGalleryContent } from './ProductGalleryContent';

export interface ProductGalleryProps extends ProductGalleryContent, UniBlockProps {}

export const ProductGallery = JSX<ProductGalleryProps>(({ className, context, slides = [] }) => {
  const galleryBlocks = slides.map((s) => s.productBlock);

  return (
    <section className={`font-sans bg-white overflow-hidden w-100 pb-6 ${className || ''}`}>
      <SwipeListControl context={context}>
        {galleryBlocks.map((block, i) => (
          <ProductGalleryBlock key={String(i)} block={block} context={context} />
        ))}
      </SwipeListControl>
    </section>
  );
});
